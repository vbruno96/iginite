import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'
import styles from '../assets/css/Todo.module.css'
import { TypeTodos } from './TodoList'

interface TodoProps {
  data: TypeTodos,
  handleToggleTodo: (idTodo: number) => void
}

export function Todo({data: todo, handleToggleTodo}: TodoProps) {
  
  return (
    <div className={styles.todo}>
      <Checkbox.Root
      className={`${styles.checkboxWrapper} ${todo.isCompleted && styles.checked}`}
        checked={todo.isCompleted}
        onCheckedChange={() => handleToggleTodo(todo.id)}
      >
        <div className={styles.checkbox}>
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </div>
        <p>{todo.name}</p>
      </Checkbox.Root>
      <button>  
        <Trash />
      </button>
    </div>
  )
}
