import React, { useState } from "react";

function TaskForm() {
  // 1. State:
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");

  // 2. Event Handler: form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default refresh behavior of the form
    if (!taskName) return; // if it is empty, do nothing

    console.log("Task submitted:", { taskName, priority });

    // Empty the form after submission
    setTaskName("");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "20px 0",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>Create New Support Task</h3>

      {/* Task Name Input */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter Task Description (e.g., Fix login issue)"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{ width: "80%", padding: "8px" }}
        />
      </div>

      {/* Priority Dropdown */}
      <div style={{ marginBottom: "10px" }}>
        <label>Priority: </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Add Task Button */}
      <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
