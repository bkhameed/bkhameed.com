export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted mt-1">Manage your account and application preferences.</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Display Name</label>
              <input
                type="text"
                defaultValue="bkhameed"
                className="w-full px-3 py-2 rounded-lg border border-card-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                defaultValue="admin@bkhameed.com"
                className="w-full px-3 py-2 rounded-lg border border-card-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>

        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Notifications</h3>
          <div className="space-y-3">
            {[
              { label: "Email notifications", description: "Receive updates via email" },
              { label: "Push notifications", description: "Receive browser push notifications" },
              { label: "Weekly digest", description: "Get a weekly summary report" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted">{item.description}</p>
                </div>
                <div className="w-10 h-6 bg-accent rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Danger Zone</h3>
          <p className="text-sm text-muted mb-4">
            Permanently delete your account and all associated data.
          </p>
          <button className="bg-danger hover:bg-danger/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
