import { ChangeEvent, useState } from "react"
import { PlusCircle } from "phosphor-react"
import { Header } from "./components/Header"

interface TypeTodos {
  id: number
  name: string
  isCompleted: boolean
}

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([] as TypeTodos[])

  function handleNewTodoInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value)
  }

  return (
    <>
      <Header />
      <div className="content">
        <form>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTodo}
            onChange={handleNewTodoInputChange}
          />
          <button type="submit">Criar <PlusCircle weight="bold"/></button>
        </form>
        <div className="header-todos">
          <div className="created-todos">
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>
          <div className="completed-todos">
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
