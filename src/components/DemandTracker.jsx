import React from "react";

function DemandTracker({ tasks }) {
  const totalTasks = tasks.length;
  const highPriorityCount = tasks.filter((t) => t.priority === "High").length;
  const mediumPriorityCount = tasks.filter(
    (t) => t.priority === "Medium",
  ).length;
  const lowPriorityCount = tasks.filter((t) => t.priority === "Low").length;

  const highDemandRatio =
    totalTasks > 0 ? Math.round((highPriorityCount / totalTasks) * 100) : 0;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-sky-400 tracking-wide flex items-center gap-2">
          📊 Customer Demand Analytics
        </h3>
        <span className="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-full font-mono">
          Live Metrics
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-lg text-center">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
            Total Issues
          </p>
          <h2 className="text-2xl font-bold text-slate-100 mt-1">
            {totalTasks}
          </h2>
        </div>

        <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-lg text-center">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
            High Priority
          </p>
          <h2 className="text-2xl font-bold text-rose-500 mt-1">
            {highPriorityCount}
          </h2>
        </div>

        <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-lg text-center">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
            Critical Ratio
          </p>
          <h2 className="text-2xl font-bold text-amber-400 mt-1">
            {highDemandRatio}%
          </h2>
        </div>
      </div>

      <div className="bg-slate-950/40 p-3 rounded-lg border border-slate-800/80 text-xs text-slate-300">
        💡 <strong className="text-slate-100">Demand Insight:</strong>{" "}
        {highDemandRatio > 40
          ? "High volume of urgent support tickets detected. Immediate product optimization required."
          : "Support task flow is currently stable."}
      </div>
    </div>
  );
}

export default DemandTracker;
