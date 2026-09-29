import React from "react";

function TaskList() {
  // (Dummy Data)
  const dummyTasks = [
    { id: 1, name: "Fix printer connection issue", priority: "High" },
    { id: 2, name: "Update user account permissions", priority: "Medium" },
    { id: 3, name: "Reset password for email", priority: "Low" },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Support Task List</h3>

      {dummyTasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {dummyTasks.map((task) => (
            <li
              key={task.id}
              style={{
                background: "#333",
                color: "#fff",
                padding: "10px 15px",
                marginBottom: "10px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{task.name}</span>
              <span
                style={{
                  fontSize: "0.8em",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  backgroundColor:
                    task.priority === "High"
                      ? "#e63946"
                      : task.priority === "Medium"
                        ? "#f4a261"
                        : "#2a9d8f",
                }}
              >
                {task.priority}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
