const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol Davis", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "Dan Wilson", email: "dan@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Eve Martinez", email: "eve@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Frank Lee", email: "frank@example.com", role: "Viewer", status: "Inactive" },
];

export default function UsersPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <p className="text-muted mt-1">Manage your team members and their roles.</p>
        </div>
        <button className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Add User
        </button>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-card-border">
              <th className="text-left text-sm font-medium text-muted px-6 py-3">Name</th>
              <th className="text-left text-sm font-medium text-muted px-6 py-3">Email</th>
              <th className="text-left text-sm font-medium text-muted px-6 py-3">Role</th>
              <th className="text-left text-sm font-medium text-muted px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-card-border last:border-0 hover:bg-background/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted">{user.email}</td>
                <td className="px-6 py-4 text-sm">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-success/10 text-success"
                        : "bg-muted/10 text-muted"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
