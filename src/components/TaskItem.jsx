
//import { formatDate } from "../App";
function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <article
      className={`task-item ${task.completed ? "completed" : ""}`}
    >
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        aria-label={`Mark ${task.title} as completed`}
      />

      <div className="task-details">
        <span className="task-title">{task.title}</span>

        <span className="task-date">
          Added {formatDate(task.createdAt)}
        </span>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        ×
      </button>
    </article>
  );
}

export default TaskItem;
