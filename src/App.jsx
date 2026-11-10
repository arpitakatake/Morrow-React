import { useEffect, useState } from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import ProgressSection from "./components/ProgressSection";
import TaskForm from "./components/TaskForm";
import TasksHeading from "./components/TasksHeading";
import FilterTabs from "./components/FilterTabs";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import "./App.css";
const STORAGE_KEY = "morrow-tasks";

// Load saved tasks
function loadTasks() {
  try {
    const savedTasks = JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    );

    return Array.isArray(savedTasks) ? savedTasks : [];
  } catch {
    return [];
  }
}

// Format task date
export function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [currentFilter, setCurrentFilter] = useState("all");

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  function handleAddTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((previousTasks) => [newTask, ...previousTasks]);
    setCurrentFilter("all");
  }

  // Delete a task
  function handleDeleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  // Toggle task completion
  function handleToggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Dashboard calculations
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const active = total - completed;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  let progressMessage = "A fresh start awaits.";

  if (total > 0 && percentage === 100) {
    progressMessage = "Beautifully done!";
  } else if (percentage >= 50) {
    progressMessage = "You're making lovely progress.";
  } else if (total > 0) {
    progressMessage = "One step at a time.";
  }

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="app">
      <Header />
      <Intro />

      <ProgressSection
        total={total}
        completed={completed}
        active={active}
        percentage={percentage}
        progressMessage={progressMessage}
      />

      <TaskForm onAddTask={handleAddTask} />

      <section className="tasks-section">
        <TasksHeading total={total} />

        <FilterTabs
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          total={total}
          active={active}
          completed={completed}
        />

        <TaskList
          tasks={filteredTasks}
          currentFilter={currentFilter}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </section>

      <Footer />
    </main>
  );
}

export default App;
