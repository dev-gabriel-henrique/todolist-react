import styles from "./CreatedTasks.module.css"

interface ICreatedTasks {
  numberOfTasks: number;
  numberOfTasksCompleted?: number | string;
}

export function CreatedTasks({numberOfTasks = 0, numberOfTasksCompleted = 0}: ICreatedTasks) {
  return (
    <header className={styles.header}>
    <div className={styles.createdTasks}>
      <p>
        Tarefas Criadas <span>{numberOfTasks}</span>
      </p>
    </div>

    <div className={styles.completedTasks}>
      <p>
        Concluídas <span>{numberOfTasksCompleted === 0 ? numberOfTasksCompleted : `${numberOfTasksCompleted} de ${numberOfTasks}`}</span>
      </p>
    </div>
  </header>
  )
}