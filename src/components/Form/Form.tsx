import styles from "./Form.module.css";

import plus from "../../assets/plus.svg";
import { ChangeEvent, InvalidEvent, useState } from "react";

export interface IFormType {
  onSubmit: (value: string) => void;
}

export function Form({ onSubmit }: IFormType) {
  const [newTask, setNewTask] = useState<string>("");

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(newTask);
        }}
        className={styles.form}
      >
        <input
          type="text"
          id="task"
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTask}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button type="submit" disabled={isNewTaskEmpty}>
          Criar <img src={plus} alt="icone de mais" />
        </button>
      </form>
    </div>
  );
}
