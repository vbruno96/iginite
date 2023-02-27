import { ClipboardText } from 'phosphor-react'
import styles from '../assets/css/EmptyTodos.module.css'

export function EmptyTodos() {
  return (
    <div className={styles.emptyList}>
      <ClipboardText size={56}  weight='thin'/>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize itens a fazer</p>
    </div>
  )
}
