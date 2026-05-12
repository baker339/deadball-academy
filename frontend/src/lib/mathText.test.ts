import { describe, expect, it } from "vitest";
import { splitMathSegments } from "./mathText";

describe("splitMathSegments", () => {
  it("splits plain text without math delimiters", () => {
    expect(splitMathSegments("plain text")).toEqual([{ type: "text", value: "plain text" }]);
  });

  it("splits inline math segments deterministically", () => {
    expect(splitMathSegments("Angle \\(\\theta\\) and rate \\(\\omega\\).")).toEqual([
      { type: "text", value: "Angle " },
      { type: "inlineMath", value: "\\theta" },
      { type: "text", value: " and rate " },
      { type: "inlineMath", value: "\\omega" },
      { type: "text", value: "." },
    ]);
  });

  it("splits block math segments deterministically", () => {
    expect(splitMathSegments("Eq: \\[\\omega = \\frac{d\\theta}{dt}\\]")).toEqual([
      { type: "text", value: "Eq: " },
      { type: "blockMath", value: "\\omega = \\frac{d\\theta}{dt}" },
    ]);
  });
});
