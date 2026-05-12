#!/usr/bin/env python3
"""One-shot patcher: convert plain-text `equation:` fields to \\[...\\] LaTeX for KaTeX."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HW = ROOT / "src" / "content" / "lessons" / "handwritten"

# Exact replacements (full equation string value -> LaTeX body inside \\[...\\])
EQUATION_MAP: dict[str, str] = {
    # Algebra
    "pace = N / i": r"\mathrm{pace} = \frac{N}{i}",
    # Geometry
    "(x, y)": r"(x,\,y)\ \text{as Cartesian coordinates}",
    "d = sqrt((x2 - x1)^2 + (y2 - y1)^2)": r"d = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
    "M = ((x1 + x2)/2, (y1 + y2)/2)": r"M = \left(\frac{x_1+x_2}{2},\,\frac{y_1+y_2}{2}\right)",
    "m = (y2 - y1)/(x2 - x1)": r"m = \frac{y_2-y_1}{x_2-x_1}",
    "y = mx + b": r"y = mx + b",
    "theta measured from positive x-axis": r"\theta\ \text{measured from the positive }x\text{-axis}",
    "a1/a2 = b1/b2": r"\frac{a_1}{a_2} = \frac{b_1}{b_2}",
    "c^2 = a^2 + b^2": r"c^2 = a^2 + b^2",
    "c^2 = a^2 + b^2 - 2ab cos(C)": r"c^2 = a^2 + b^2 - 2ab\cos(C)",
    "if A => B and B => C then A => C": r"(A \Rightarrow B)\ \wedge\ (B \Rightarrow C)\ \Rightarrow\ (A \Rightarrow C)",
    "(x-h)^2 + (y-k)^2 = r^2": r"(x-h)^2 + (y-k)^2 = r^2",
    "s = r theta": r"s = r\theta",
    "A = (theta/2)r^2": r"A = \frac{\theta}{2} r^2",
    "chord = 2r sin(theta/2)": r"\mathrm{chord} = 2r\sin\left(\frac{\theta}{2}\right)",
    "multi-step geometric model": r"\text{multi-step geometric model}",
    # Trig / precalc (long set)
    "v_x = v cos(theta), v_y = v sin(theta), tan(theta)=v_y/v_x": r"v_x = v\cos\theta,\quad v_y = v\sin\theta,\quad \tan\theta = \frac{v_y}{v_x}",
    "(x,y)=(cos(theta),sin(theta)) on the unit circle": r"(x,y) = (\cos\theta,\sin\theta)\ \text{on the unit circle}",
    "Outcome features often use both |v| and (v_x,v_y)": r"\text{Outcome features often use both } \lVert v\rVert \text{ and } (v_x,v_y)",
    "theta = s/r": r"\theta = \frac{s}{r}",
    "(x,y)=(cos(theta),sin(theta))": r"(x,y) = (\cos\theta,\sin\theta)",
    "omega=d(theta)/dt, T=2pi/omega": r"\omega = \frac{d\theta}{dt},\quad T = \frac{2\pi}{\omega}",
    "v_x=|v|cos(theta), v_y=|v|sin(theta)": r"v_x = \lVert v\rVert\cos\theta,\quad v_y = \lVert v\rVert\sin\theta",
    "v=v_x i+v_y j (basis dependent)": r"v = v_x \mathbf{i} + v_y \mathbf{j}\ \text{(basis dependent)}",
    "|v|_recon=sqrt(v_x^2+v_y^2)": r"\lVert v\rVert_{\mathrm{recon}} = \sqrt{v_x^2+v_y^2}",
    "theta=atan2(v_y,v_x)": r"\theta = \operatorname{atan2}(v_y, v_x)",
    "arcsin range differs from arccos range": r"\text{arcsin range differs from arccos range}",
    "reconstruct -> validate -> annotate confidence": r"\text{reconstruct} \rightarrow \text{validate} \rightarrow \text{annotate confidence}",
    "sin^2(theta)+cos^2(theta)=1": r"\sin^2\theta + \cos^2\theta = 1",
    "choose forms that avoid cancellation when possible": r"\text{choose forms that avoid cancellation when possible}",
    "symbolic check + numeric check + tests": r"\text{symbolic check} + \text{numeric check} + \text{tests}",
    "T=2pi/|B|, phase shift=C": r"T = \frac{2\pi}{|B|},\ \text{phase shift} = C",
    "phase_event=B(t_event-C)": r"\mathrm{phase}_{\mathrm{event}} = B(t_{\mathrm{event}} - C)",
    "track delta C over time windows": r"\text{track } \Delta C \text{ over time windows}",
    "amplitude=|A|, frequency=|B|/(2pi)": r"\text{amplitude} = |A|,\ \text{frequency} = \frac{|B|}{2\pi}",
    "compare delta A and delta f separately": r"\text{compare } \Delta A \text{ and } \Delta f \text{ separately}",
    "f_sample > 2 f_signal": r"f_{\mathrm{sample}} > 2 f_{\mathrm{signal}}",
    "x=r cos(theta), y=r sin(theta)": r"x = r\cos\theta,\quad y = r\sin\theta",
    "x=rho cos(beta)cos(alpha), y=rho cos(beta)sin(alpha), z=rho sin(beta)": r"x = \rho\cos\beta\cos\alpha,\ y = \rho\cos\beta\sin\alpha,\ z = \rho\sin\beta",
    "input -> transform -> inverse transform -> compare": r"\text{input} \rightarrow \text{transform} \rightarrow \text{inverse transform} \rightarrow \text{compare}",
    "y=A f(B(t-C))+D": r"y = A\,f\bigl(B(t-C)\bigr) + D",
    "e_i=y_i-y_hat_i": r"e_i = y_i - \hat{y}_i",
    "fit quality + interpretability + generalization": r"\text{fit quality} + \text{interpretability} + \text{generalization}",
    "y(t)=g1(t)+g2(t)+g3(t)": r"y(t) = g_1(t) + g_2(t) + g_3(t)",
    "delta error = error_without_term - error_with_term": r"\Delta e = e_{\mathrm{drop}} - e_{\mathrm{keep}}\ \text{(model comparison)}",
    "prefer minimal model that meets decision needs": r"\text{prefer minimal model that meets decision needs}",
    "a dot b=|a||b|cos(theta)": r"a\cdot b = \lVert a\rVert\,\lVert b\rVert\cos\theta",
    "proj_b(a)=((a dot b)/(b dot b))b": r"\mathrm{proj}_b(a) = \frac{a\cdot b}{b\cdot b}\,b",
    "cos(theta)=(a dot b)/(|a||b|)": r"\cos\theta = \frac{a\cdot b}{\lVert a\rVert\,\lVert b\rVert}",
    "effective_speed = v dot u": r"\text{effective speed} = v\cdot u",
    "|a x b|=|a||b|sin(theta)": r"\lVert a\times b\rVert = \lVert a\rVert\,\lVert b\rVert\sin\theta",
    "a x b = -(b x a)": r"a\times b = -(b\times a)",
    "Area=|a x b|": r"\mathrm{Area} = \lVert a\times b\rVert",
    "maximize f(theta) subject to theta in F": r"\max_{\theta\in F} f(\theta)",
    "theta*=argmax_{theta in [theta_min,theta_max]} f(theta)": r"\theta^\ast = \arg\max_{\theta\in[\theta_{\min},\theta_{\max}]} f(\theta)",
    "report theta band where f(theta) remains near optimum": r"\text{report } \theta \text{ band where } f(\theta) \text{ remains near optimum}",
    "sigma_y^2 approx sum((partial f/partial x_i)^2 sigma_i^2)": r"\sigma_y^2 \approx \sum_i \left(\frac{\partial f}{\partial x_i}\right)^2 \sigma_i^2",
    "d/dtheta tan(theta)=sec^2(theta)": r"\frac{d}{d\theta}\tan\theta = \sec^2\theta",
    "report = estimate + interval + caveat": r"\text{report} = \text{estimate} + \text{interval} + \text{caveat}",
    "decision = optimize(model(features)) within constraints": r"\text{decision} = \text{optimize}(\mathrm{model}(\mathrm{features})) \text{ within constraints}",
    "output = target + band + uncertainty + triggers": r"\text{output} = \text{target} + \text{band} + \text{uncertainty} + \text{triggers}",
    "validity = math quality + communication quality": r"\text{validity} = \text{math quality} + \text{communication quality}",
}


def ts_escape_latex(runtime_latex: str) -> str:
    """Runtime LaTeX uses single backslashes; TS string literals need them doubled."""
    return runtime_latex.replace("\\", "\\\\")


def patch_file(path: Path) -> int:
    raw = path.read_text(encoding="utf-8")
    lines = raw.splitlines()
    # Optional trailing comma (geometry) or end-of-line only (trig multiline objects)
    eq_re = re.compile(r'^(\s*equation:\s*")([^"]*)(")(\s*,?\s*)$')
    changed = 0
    out: list[str] = []

    for line in lines:
        m = eq_re.match(line)
        if not m:
            out.append(line)
            continue
        prefix, body, quote, tail = m.group(1), m.group(2), m.group(3), m.group(4)
        # Skip when already written as TS-escaped block math (leading "\\[" in file)
        if "\\(" in body or body.startswith("\\\\["):
            out.append(line)
            continue
        latex_inner = EQUATION_MAP.get(body)
        if latex_inner is None:
            m2 = re.fullmatch(r"outcome_(\d+) = baseline \+ context_adjustment \+ residual", body)
            if m2:
                k = m2.group(1)
                latex_inner = (
                    rf"\mathrm{{outcome}}_{{{k}}} = \mathrm{{baseline}} + \mathrm{{ctx\_adj}} + \varepsilon"
                )
            else:
                raise SystemExit(f"Unmapped equation in {path.name}: {body!r}")
        runtime = r"\[" + latex_inner + r"\]"
        new_body = ts_escape_latex(runtime)
        new_line = prefix + new_body + quote + tail
        if new_line != line:
            changed += 1
        out.append(new_line)

    new_raw = "\n".join(out) + ("\n" if raw.endswith("\n") else "")
    if new_raw != raw:
        path.write_text(new_raw, encoding="utf-8")
    return changed


def main() -> None:
    total = 0
    for path in sorted(HW.glob("handAuthored*.ts")):
        n = patch_file(path)
        if n:
            print(f"{path.name}: patched {n} equation line(s)")
        total += n
    print(f"total equation lines patched: {total}")


if __name__ == "__main__":
    main()
