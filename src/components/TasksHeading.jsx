
function TasksHeading({ total }) {
  return (
    <div className="tasks-heading">
      <div>
        <p className="section-label">YOUR LIST</p>
        <h2>The little things</h2>
      </div>

      <span className="task-total">
        {total} {total === 1 ? "task" : "tasks"}
      </span>
    </div>
  );
}

export default TasksHeading;
