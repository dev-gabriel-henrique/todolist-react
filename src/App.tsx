import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { CheckTasks } from "./components/CheckTasks/CheckTasks";

import "./global.css";
import styles from "./App.module.css";
import { CreatedTasks } from "./components/CreatedTasks/CreatedTasks";
import { EmptyList } from "./components/List/EmptyList";

export function App() {
  const [tasks, setTasks] = useState<
    Array<{ id: number; content: string; isCompleted: boolean }>
  >([]);

  function handleCreateNewTask(content: string) {
    if(!content.trim()) return
    setTasks([...tasks, { id: tasks.length + 1, content, isCompleted: false }]);
  }

  function handleTaskCompleted(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  const numberOfTasksCompleted = tasks.filter(
    (task) => task.isCompleted
  ).length;

  return (
    <div>
      <Header />

      <Form onSubmit={handleCreateNewTask} />

      <CreatedTasks
        numberOfTasks={tasks.length}
        numberOfTasksCompleted={numberOfTasksCompleted}
      />

      <div className={tasks.length > 0 ? styles.task : styles.noTasks}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <CheckTasks
              key={task.id}
              isTaskChecked={task.isCompleted}
              content={task.content}
              onDeleteTask={() => handleDeleteTask(task.id)}
              onTaskCompleted={() => handleTaskCompleted(task.id)}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
}
