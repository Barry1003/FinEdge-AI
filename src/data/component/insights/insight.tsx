import {
  FileText,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  Target,
  Info,
  ArrowDown,
  ArrowUp,
  PhoneCall,
} from "lucide-react";
import { useState } from "react";

interface Insight {
  id: string;
  title: string;
  description: string;
  impact: "critical" | "high" | "medium" | "low";
  category: "opportunity" | "warning" | "trend" | "recommendation";
  metric: string;
  change: number;
}

export default function InsightsPage() {
  const [filterCategory, setFilterCategory] = useState<
    "all" | "opportunity" | "warning" | "trend" | "recommendation"
  >("all");
  const [sortBy, setSortBy] = useState<"impact" | "recent">("impact");

  const insights: Insight[] = [
    {
      id: "1",
      title: "Logistics Cost Spike",
      description:
        "Your logistics costs have increased 15% compared to last month. Negotiate bulk rates or switch providers to optimize.",
      impact: "critical",
      category: "warning",
      metric: "+15% vs last month",
      change: 15,
    },
    {
      id: "2",
      title: "Cash Flow Optimization Opportunity",
      description:
        "Extending supplier payment terms from 30 to 45 days could improve cash flow by 12% (₦1.2M) monthly.",
      impact: "high",
      category: "opportunity",
      metric: "Potential: +₦1.2M",
      change: 12,
    },
    {
      id: "3",
      title: "COGS Below Industry Average",
      description:
        "Your COGS is 32% vs industry average of 35%. Excellent cost management - maintain current supplier negotiations.",
      impact: "low",
      category: "trend",
      metric: "-3% vs industry",
      change: -3,
    },
    {
      id: "4",
      title: "Revenue Growth Trajectory",
      description:
        "Your monthly revenue is growing at 8% month-on-month. At this rate, you'll reach ₦5M by Q1 2026.",
      impact: "medium",
      category: "recommendation",
      metric: "+8% MoM",
      change: 8,
    },
    {
      id: "5",
      title: "Payroll Efficiency Alert",
      description:
        "Payroll represents 28% of expenses (target: <25%). Review staffing or implement automation to reduce costs by ₦380K.",
      impact: "high",
      category: "warning",
      metric: "+3% above target",
      change: 3,
    },
    {
      id: "6",
      title: "Q4 Seasonal Demand Surge",
      description:
        "Historical data shows 35% higher demand in Q4. Begin inventory buildup now and secure financing for stock.",
      impact: "medium",
      category: "recommendation",
      metric: "Expected: +35%",
      change: 35,
    },
    {
      id: "7",
      title: "Marketing ROI Plateau",
      description:
        "Marketing spend increased 20% but conversion rates dropped 8%. Reallocate budget to high-performing channels.",
      impact: "high",
      category: "warning",
      metric: "-8% conversion",
      change: -8,
    },
    {
      id: "8",
      title: "Invoice Collection Performance",
      description:
        "Average collection time improved to 35 days from 45 days. This freed up ₦850K in working capital.",
      impact: "low",
      category: "trend",
      metric: "-10 days",
      change: -10,
    },
  ];

  // Filter insights
  const filteredInsights = insights.filter(
    (insight) => filterCategory === "all" || insight.category === filterCategory
  );

  // Sort insights
  const sortedInsights = [...filteredInsights].sort((a, b) => {
    if (sortBy === "impact") {
      const impactOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return impactOrder[b.impact] - impactOrder[a.impact];
    }
    return 0;
  });

  const getImpactStyles = (impact: string) => {
    switch (impact) {
      case "critical":
        return {
          bg: "bg-red-500/10",
          border: "border-red-500/30",
          badgeBg: "bg-red-500/20",
          badgeText: "text-red-300",
          badgeLabel: "🔴 Critical",
        };
      case "high":
        return {
          bg: "bg-amber-500/10",
          border: "border-amber-500/30",
          badgeBg: "bg-amber-500/20",
          badgeText: "text-amber-300",
          badgeLabel: "🟠 High",
        };
      case "medium":
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/30",
          badgeBg: "bg-blue-500/20",
          badgeText: "text-blue-300",
          badgeLabel: "🔵 Medium",
        };
      case "low":
        return {
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/30",
          badgeBg: "bg-emerald-500/20",
          badgeText: "text-emerald-300",
          badgeLabel: "🟢 Low",
        };
      default:
        return {
          bg: "bg-slate-500/10",
          border: "border-slate-500/30",
          badgeBg: "bg-slate-500/20",
          badgeText: "text-slate-300",
          badgeLabel: "ℹ️ Info",
        };
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "opportunity":
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case "warning":
        return <AlertTriangle className="w-6 h-6 text-red-400" />;
      case "trend":
        return <TrendingUp className="w-6 h-6 text-green-400" />;
      case "recommendation":
        return <Target className="w-6 h-6 text-blue-400" />;
      default:
        return <Info className="w-6 h-6 text-slate-400" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "opportunity":
        return "Opportunity";
      case "warning":
        return "Warning";
      case "trend":
        return "Trend";
      case "recommendation":
        return "Recommendation";
      default:
        return "Info";
    }
  };

  const criticalCount = insights.filter((i) => i.impact === "critical").length;
  const highCount = insights.filter((i) => i.impact === "high").length;
  const totalInsights = insights.length;

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Financial Insights
          </h1>
          <p className="text-slate-400">
            AI-powered analysis of your financial data
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-xs font-medium text-slate-400 mb-2">
              Total Insights
            </p>
            <p className="text-3xl font-bold text-white">{totalInsights}</p>
            <p className="text-xs text-slate-500 mt-2">
              Analysis from your data
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-xs font-medium text-red-400 mb-2">
              Critical & High
            </p>
            <p className="text-3xl font-bold text-white">
              {criticalCount + highCount}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Need immediate attention
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-xs font-medium text-emerald-400 mb-2">
              Positive Trends
            </p>
            <p className="text-3xl font-bold text-white">
              {insights.filter((i) => i.category === "trend").length}
            </p>
            <p className="text-xs text-slate-500 mt-2">Things going well</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value as any)}
              className="px-4 py-2 bg-slate-800 border cursor-pointer border-slate-700 rounded-lg text-white text-sm focus:border-blue-600 focus:outline-none transition-colors"
            >
              <option value="all">All Categories</option>
              <option value="opportunity"> Opportunities</option>
              <option value="warning"> Warnings</option>
              <option value="trend"> Trends</option>
              <option value="recommendation"> Recommendations</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 bg-slate-800 border cursor-pointer border-slate-700 rounded-lg text-white text-sm focus:border-blue-600 focus:outline-none transition-colors"
            >
              <option value="impact">Sort by Impact</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>

          <button className="px-4 py-2 bg-transparent flex gap-2 border hover:border-blue-500 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
            <FileText /> Generate Report
          </button>
        </div>

        {/* Insights Grid */}
        <div className="space-y-4">
          {sortedInsights.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
              <p className="text-slate-400">
                No insights found for selected filters
              </p>
            </div>
          ) : (
            sortedInsights.map((insight) => {
              const styles = getImpactStyles(insight.impact);
              return (
                <div
                  key={insight.id}
                  className={`${styles.bg} ${styles.border} border rounded-xl p-6 transition-all hover:border-opacity-100 group cursor-pointer hover:shadow-lg`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="shrink-0 text-2xl mt-1">
                      {getCategoryIcon(insight.category)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {insight.title}
                          </h3>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {insight.description}
                          </p>
                        </div>
                        <span className="text-slate-400 shrink-0 group-hover:translate-x-1 transition-transform mt-1">
                          →
                        </span>
                      </div>

                      {/* Footer Info */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
                        <div className="flex items-center gap-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${styles.badgeBg} ${styles.badgeText}`}
                          >
                            {styles.badgeLabel}
                          </span>
                          <span className="text-xs text-slate-400">
                            {getCategoryLabel(insight.category)}
                          </span>
                        </div>
                        <div
                          className={`text-sm font-semibold ${insight.change >= 0 ? "text-red-400" : "text-emerald-400"}`}
                        >
                          {insight.change >= 0 ? (
                            <ArrowUp className="inline w-4 h-4" />
                          ) : (
                            <ArrowDown className="inline w-4 h-4" />
                          )}{" "}
                          {insight.metric}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer CTA */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">
            Want deeper analysis?
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Connect with our financial advisors to get personalized
            recommendations for your business.
          </p>
          <div className="flex w-ful justify-center">
            <button className="px-6 py-2.5 bg-transparent border hover:border-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" /> Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
