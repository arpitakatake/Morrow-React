
import TaskItem from "./TaskItem";
import EmptyState from "./EmptyState";

function TaskList({
  tasks,
  currentFilter,
  onToggleTask,
  onDeleteTask,
}) {
  return (
    <>
      {tasks.length > 0 ? (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      ) : (
        <EmptyState currentFilter={currentFilter} />
      )}
    </>
  );
}

export default TaskList;
