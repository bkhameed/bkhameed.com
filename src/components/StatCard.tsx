interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

export default function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  const changeColor = {
    positive: "text-success",
    negative: "text-danger",
    neutral: "text-muted",
  }[changeType];

  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted">{title}</span>
        <span className="text-muted">{icon}</span>
      </div>
      <p className="text-3xl font-bold tracking-tight">{value}</p>
      <p className={`text-sm mt-1 ${changeColor}`}>{change}</p>
    </div>
  );
}
