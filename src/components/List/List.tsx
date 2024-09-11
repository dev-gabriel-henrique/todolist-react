import styles from './List.module.css'

import Clipboard from "../../assets/Clipboard.svg"
import { CheckTasks } from "../CheckTasks/CheckTasks"
import { useState } from 'react'


interface ITasksProps {
  isChecked: boolean; 
  content: string;
  hasATask: boolean;
  onDeleteTask: (task: string) => void;
  onCheckTask: (isChecked: boolean) => void;
}


export function List({isChecked = false,
   content, 
   hasATask, 
   onDeleteTask, 
   onCheckTask
  }: ITasksProps) {

  const [quantityTasks, setQuantityTasks] = useState<number>(0)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function checkedTask() {
    onCheckTask(isChecked)
  }

  return (
    <div>

  <header className={styles.header}>
    <div className={styles.createdTasks}>
      <p>Tarefas Criadas <span>0</span></p>
    </div>

    <div className={styles.completedTasks}>
      <p>Concluídas <span>0</span></p>
    </div>
  </header>

  <ul className={styles.task}>
    <div className={styles.background}>
      <img src={Clipboard} alt="Logo de Prancheta" />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>

    <li>
      <CheckTasks />
      </li>
  </ul>
  </div>
  )
}