import { ChangeEvent, FormEvent, useState } from 'react'
import uuid from 'react-uuid';
import { PlusCircle } from 'phosphor-react';
import { Todo } from './Todo'
import { EmptyTodos } from './EmptyTodos'

import styles from '../assets/css/TodoList.module.css'

export interface TypeTodos {
  id: string
  name: string
  isCompleted: boolean
}

export function TodoList() {
  const [inputTodo, setInputodo] = useState('')
  const [todos, setTodos] = useState([] as TypeTodos[])

  const inputTodoIsEmpty = inputTodo === ''
  const amountTodos = todos.length
  let amountTodosCompleted = todos.filter(todo => {
    if (todo.isCompleted) return todo
  }).length

  function handleNewTodoInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputodo(event.target.value)
  }

  function handleNewTodo(event: FormEvent) {
    event.preventDefault()

    const newTodo: TypeTodos = {
      id: uuid(),
      name: inputTodo,
      isCompleted: false
    }

    setTodos(prevTodos => [...prevTodos, newTodo])
    setInputodo('')
  }

  function handleDeleteTodo(id: string) {
    const todosWithoutDeletedTodo = todos.filter(todo => {
      if (todo.id !== id) return todo
    })
    setTodos(todosWithoutDeletedTodo)
  }

  function handleToggleCompleteTodo(id: string) {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    }))
  }

  return (
    <div className={styles.content}>
      <form onSubmit={handleNewTodo}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={inputTodo}
          onChange={handleNewTodoInputChange}
        />
        <button
          type="submit"
          disabled={inputTodoIsEmpty}
        >
          Criar
          <PlusCircle weight="bold"/>
        </button>
      </form>
      <div className={styles.headerTodos}>
        <div className={styles.createdTodos}>
          <strong>Tarefas criadas</strong>
          <span>{amountTodos}</span>
        </div>
        <div className={styles.completedTodos}>
          <strong>Concluídas</strong>
          <span>
            {
              amountTodosCompleted > 0
                ? `${amountTodosCompleted} de ${amountTodos}`
                : amountTodosCompleted
            }
          </span>
        </div>
      </div>
      {
        amountTodos === 0
          ? <EmptyTodos />
          : (
              <div className={styles.todoList}>
                {
                  todos.map(todo => (
                    <Todo
                      key={todo.id}
                      onToggleTodo={handleToggleCompleteTodo}
                      onDeleteTodo={handleDeleteTodo}
                      data={todo} />
                  ))
                }
              </div>
            )
      }
    </div>
  )
}

