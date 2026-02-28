const activities = [
  { id: 1, user: "Alice Johnson", action: "created a new project", time: "2 minutes ago", avatar: "AJ" },
  { id: 2, user: "Bob Smith", action: "updated user settings", time: "15 minutes ago", avatar: "BS" },
  { id: 3, user: "Carol Davis", action: "deployed to production", time: "1 hour ago", avatar: "CD" },
  { id: 4, user: "Dan Wilson", action: "resolved issue #142", time: "3 hours ago", avatar: "DW" },
  { id: 5, user: "Eve Martinez", action: "added new team member", time: "5 hours ago", avatar: "EM" },
];

export default function RecentActivity() {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0">
              {activity.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>{" "}
                <span className="text-muted">{activity.action}</span>
              </p>
              <p className="text-xs text-muted">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
