"use client";

const data = [
  { label: "Mon", value: 65 },
  { label: "Tue", value: 45 },
  { label: "Wed", value: 80 },
  { label: "Thu", value: 55 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 35 },
  { label: "Sun", value: 70 },
];

const maxValue = Math.max(...data.map((d) => d.value));

export default function BarChart() {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-6">Weekly Traffic</h3>
      <div className="flex items-end gap-3 h-48">
        {data.map((item) => (
          <div key={item.label} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full relative" style={{ height: "100%" }}>
              <div
                className="absolute bottom-0 w-full bg-accent/80 rounded-t-md hover:bg-accent transition-colors"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
            <span className="text-xs text-muted">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
