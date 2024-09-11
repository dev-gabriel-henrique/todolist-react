import styles from "./checkbox.module.css"

interface ICheckbox {
  isChecked: boolean;
  onClick: (checked: boolean) => void;
}

export function Checkbox({ isChecked = false, onClick}: ICheckbox) {
  const handleToggle = () => {
    onClick(!isChecked)
  }
  
  return (
    <div className={`${styles.checkbox} ${isChecked ? styles.checked : styles.unchecked} `}
    onClick={handleToggle}>      
    </div>
  )
}