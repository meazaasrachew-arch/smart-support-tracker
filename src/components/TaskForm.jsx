import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      priority: priority,
    };

    onAddTask(newTask);
    setTaskName("");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl mb-6"
    >
      <h3 className="text-md font-semibold text-slate-100 mb-4">
        Create New Support Task
      </h3>

      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter task description (e.g., Fix login issue)"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="flex-1 bg-slate-950 border border-slate-800 text-slate-100 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-500"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
        >
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>

        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm rounded-lg px-5 py-2.5 transition-all active:scale-95 cursor-pointer shadow-lg shadow-sky-500/20"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
