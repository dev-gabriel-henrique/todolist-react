import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { CheckTasks } from "./components/CheckTasks/CheckTasks";

import "./global.css";
import styles from "./App.module.css";
import { CreatedTasks } from "./components/CreatedTasks/CreatedTasks";
import { EmptyList } from "./components/List/EmptyList";

/* 
Quero fazer as tasks de forma dinânica, para que ao dar o submit no form,
eu possa adicionar uma nova task.

- Tasks (deverá ser um array de objeto, carregando checkbox, content, button);
- Botão de submit que está no forms, e devera registrar a nova task;

ALGORITIMO
- Form que tem a função de adicionar uma nova task; (OK)
- Função que verifica quantas tasks tem na lista(OK); 
- Task que tem a função de checar, observar ou deletar a propria task(OK);
- o Header da list tem a função de observar as tasks(OK);
- O Checkbox tem a função de verificar se a task foi concluida(OK);
- O botão tem a função de deletar a li que leva a task(OK);
- Criar um array de id: que ao definir uma task eu pego o id dela e jogo para o array.
*/

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
