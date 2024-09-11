import styles from './Form.module.css';

import plus from "../../assets/plus.svg";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { List } from '../List/List';

export interface ITaskType {
  isChecked?: boolean;
  content: string;
  onDeletetask?: (task: string) => {};
  id: number;
}
interface ITaskProp {
  task?: ITaskType;
}

export function Form({ task }: ITaskProp) {
  const [tasks, setTasks] = useState(["Academia todo dia!"]);

  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <div>
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input
        type="text"
        id="task"
        name="task"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />

      <button type="submit" disabled={isNewTaskEmpty}>
        Criar <img src={plus} alt="icone de mais" />
      </button>
    </form>

    <List 
    />
    </div>
  );
}
