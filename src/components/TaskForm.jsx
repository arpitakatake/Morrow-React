
import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskInput, setTaskInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const title = taskInput.trim();

    if (!title) return;

    onAddTask(title);
    setTaskInput("");
  }

  return (
    <section className="add-section">
      <form className="task-form" onSubmit={handleSubmit}>
        <span className="plus-icon">＋</span>

        <input
          type="text"
          placeholder="What's on your mind today?"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
          autoComplete="off"
          maxLength={120}
          required
        />

        <button type="submit" className="add-button">
          Add task <span>↗</span>
        </button>
      </form>

      <p className="input-hint">
        Press Enter to add a task
      </p>
    </section>
  );
}

export default TaskForm;
