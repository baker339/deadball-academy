"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../components/AuthProvider";
import { apiFetch } from "../../lib/api";

type UserRow = {
  id: number;
  email: string;
  full_name: string;
  role: "student" | "content_editor" | "admin";
  is_active: boolean;
};

export default function AdminPage() {
  const { token, hasAnyRole } = useAuth();
  const [users, setUsers] = useState<UserRow[]>([]);
  const [error, setError] = useState("");
  const [savingUserId, setSavingUserId] = useState<number | null>(null);

  const loadUsers = useCallback(async () => {
    if (!token) return;
    try {
      setError("");
      const rows = await apiFetch<UserRow[]>("/admin/users", { token });
      setUsers(rows);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load users");
    }
  }, [token]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  async function changeRole(userId: number, role: UserRow["role"]) {
    if (!token) return;
    try {
      setSavingUserId(userId);
      await apiFetch<UserRow>(`/admin/users/${userId}/role`, {
        token,
        method: "PATCH",
        body: { role },
      });
      await loadUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Role update failed");
    } finally {
      setSavingUserId(null);
    }
  }

  if (!hasAnyRole("admin")) {
    return (
      <div className="ui-container max-w-4xl py-14">
        <h1 className="text-3xl font-bold">Admin Access Required</h1>
        <p className="mt-3 text-[color:var(--color-muted)]">Only admins can manage user roles.</p>
      </div>
    );
  }

  return (
    <div className="ui-container max-w-4xl py-14">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <p className="mt-3 text-[color:var(--color-muted)]">Assign user roles. New users default to student unless promoted.</p>
      {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}

      <div className="mt-6 overflow-x-auto rounded border border-[color:var(--color-border)]">
        <table className="min-w-full text-sm">
          <thead className="bg-[color:var(--color-surface-subtle)]">
            <tr>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Role</th>
              <th className="px-3 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-[color:var(--color-border)]">
                <td className="px-3 py-2">{user.full_name}</td>
                <td className="px-3 py-2">{user.email}</td>
                <td className="px-3 py-2">
                  <select
                    value={user.role}
                    disabled={savingUserId === user.id}
                    onChange={(event) => changeRole(user.id, event.target.value as UserRow["role"])}
                    className="rounded border border-[color:var(--color-border)] px-2 py-1"
                  >
                    <option value="student">student</option>
                    <option value="content_editor">content_editor</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td className="px-3 py-2">{user.is_active ? "active" : "inactive"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
