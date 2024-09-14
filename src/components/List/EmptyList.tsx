import styles from "./EmptyList.module.css";

import Clipboard from "../../assets/Clipboard.svg";


export function EmptyList() {
  return (
    <div>
        <div className={styles.background}>
          <img src={Clipboard} alt="Logo de Prancheta" />
          <h2>Você ainda não tem tarefas cadastradas</h2>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    </div>
  );
}
