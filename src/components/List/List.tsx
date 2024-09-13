import styles from "./List.module.css";

import Clipboard from "../../assets/Clipboard.svg";
import { CheckTasks } from "../CheckTasks/CheckTasks";
import { useState } from "react";

interface ITasksProps {
  content: string;
  hasATask: boolean;
  onCheckTask: (isChecked: boolean) => void;
}

export function List({
  content,
  hasATask,
  onCheckTask,
}: ITasksProps) {
  const [quantityTasks, setQuantityTasks] = useState<number>(0);
  const [quantityTasksCompleted, setQuantityTasksCompleted] = useState<number>(0);


  function tasksQuantity() {
    if (hasATask) {
      setQuantityTasks(quantityTasks + 1);
    }
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <p>
            Tarefas Criadas <span>{quantityTasks}</span>
          </p>
        </div>

        <div className={styles.completedTasks}>
          <p>
            Concluídas <span>{quantityTasksCompleted}</span>
          </p>
        </div>
      </header>

      <ul className={styles.task}>
        <div className={styles.background}>
          <img src={Clipboard} alt="Logo de Prancheta" />
          <h2>Você ainda não tem tarefas cadastradas</h2>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <li>

        </li>
      </ul>
    </div>
  );
}
