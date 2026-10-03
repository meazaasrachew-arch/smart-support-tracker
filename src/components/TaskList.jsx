import React from "react";

function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onClearAll,
  filterPriority,
  onFilterChange,
}) {
  const getBadgeStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      case "Medium":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Low":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      default:
        return "bg-slate-800 text-slate-300";
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 className="text-md font-semibold text-slate-100">
          Support Task List
        </h3>

        <div className="flex items-center gap-2">
          <select
            value={filterPriority}
            onChange={(e) => onFilterChange(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs text-slate-300 rounded-lg px-2.5 py-1 focus:outline-none focus:border-sky-500 transition-all cursor-pointer"
          >
            <option value="All">All Priorities</option>
            <option value="High">High Only</option>
            <option value="Medium">Medium Only</option>
            <option value="Low">Low Only</option>
          </select>

          {tasks.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-xs text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 px-3 py-1 rounded-lg transition-all cursor-pointer font-medium"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {tasks.length === 0 ? (
        <p className="text-sm text-slate-500 text-center py-6">
          ✨ No tasks found in this category!
        </p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-lg flex items-center justify-between hover:border-slate-700 transition-all gap-3"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onToggleTask(task.id)}
                  className={`w-5 h-5 rounded border flex items-center justify-center transition-all cursor-pointer ${
                    task.completed
                      ? "bg-sky-500 border-sky-500 text-slate-950 font-bold"
                      : "border-slate-700 hover:border-sky-400"
                  }`}
                >
                  {task.completed && "✓"}
                </button>

                <span
                  className={`text-sm font-medium ${
                    task.completed
                      ? "line-through text-slate-500"
                      : "text-slate-200"
                  }`}
                >
                  {task.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-3 py-1 rounded-full border font-medium ${getBadgeStyle(
                    task.priority,
                  )}`}
                >
                  {task.priority}
                </span>

                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-xs text-slate-500 hover:text-rose-400 p-1.5 rounded hover:bg-rose-500/10 transition-all cursor-pointer"
                  title="Delete Task"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
