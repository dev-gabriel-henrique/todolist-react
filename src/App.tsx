import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";

import "./global.css";
import { useState } from "react";
import { List } from "./components/List/List";

/* 
Quero fazer as tasks de forma dinânica, para que ao dar o submit no form,
eu possa adicionar uma nova task.

- Tasks (deverá ser um array de objeto, carregando checkbox, content, button);
- Botão de submit que está no forms, e devera registrar a nova task;

ALGORITIMO
- Form que tem a função de adicionar uma nova task; (OK)
- Lista de tasks, que verifica quantas tasks tem disponíveis
- Task que tem a função de checar, observar ou deletar a propria task;
*/

export function App() {
  const [tasks, setTasks] = useState<Array<{ id: number; content: string }>>([
    { id: 1, content: "Acordar Cedo" },
  ]);

  function handleCreateNewTask(content: string) {
    setTasks([...tasks, { id: tasks.length + 1, content }]);

    console.log(content);
  }

  return (
    <div>
      <Header />

      <Form onSubmit={handleCreateNewTask} />
    </div>
  );
}
