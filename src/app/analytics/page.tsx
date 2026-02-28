import BarChart from "@/components/BarChart";

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted mt-1">Track performance metrics and trends.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <BarChart />
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6">Top Pages</h3>
          <div className="space-y-4">
            {[
              { page: "/dashboard", views: "4,231", pct: 85 },
              { page: "/products", views: "2,847", pct: 57 },
              { page: "/checkout", views: "1,923", pct: 38 },
              { page: "/blog", views: "1,456", pct: 29 },
              { page: "/about", views: "892", pct: 18 },
            ].map((item) => (
              <div key={item.page}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{item.page}</span>
                  <span className="text-muted">{item.views} views</span>
                </div>
                <div className="w-full bg-card-border rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
