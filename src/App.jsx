import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Smart Support Task & Demand Tracker</h1>

      {/* የሰራነውን TaskForm Component እዚህ ጋር እንጠራዋለን */}
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
