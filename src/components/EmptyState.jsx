
function EmptyState({ currentFilter }) {
  let title = "A blank page. A fresh beginning.";
  let description = "Add something you'd like to get done today.";

  if (currentFilter === "active") {
    title = "All caught up!";
    description = "You don't have any pending tasks right now.";
  } else if (currentFilter === "completed") {
    title = "Nothing finished just yet.";
    description = "Complete a task and it will find its place here.";
  }

  return (
    <div className="empty-state">
      <div className="empty-art">
        <span>✳</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default EmptyState;
