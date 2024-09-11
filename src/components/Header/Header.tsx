import styles from "./Header.module.css"

import toDoLogo from "../../assets/todo.svg"

export function Header() {
  return (
    <header className={ styles.header }>
      <img src={toDoLogo} alt="" />
      <h1>to<span>do</span></h1>
    </header>
  )
}