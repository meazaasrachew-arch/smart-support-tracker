import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import DemandTracker from "./components/DemandTracker";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Fix printer connection issue",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      name: "Update user account permissions",
      priority: "Medium",
      completed: false,
    },
  ]);

  const [filterPriority, setFilterPriority] = useState("All");

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, id: Date.now(), completed: false },
    ]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleClearAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterPriority === "All") return true;
    return task.priority === filterPriority;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100">
            Smart Support Task & Demand Tracker
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-2">
            Real-time support operations & customer demand metrics
          </p>
        </header>

        <DemandTracker tasks={tasks} />
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask}
          onClearAll={handleClearAllTasks}
          filterPriority={filterPriority}
          onFilterChange={setFilterPriority}
        />
      </div>
    </div>
  );
}

export default App;
