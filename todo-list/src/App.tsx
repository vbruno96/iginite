import { Header } from "./components/Header"

interface TypeTodos {
  id: number
  name: string
  isCompleted: boolean
}

function App() {

  return (
    <>
      <Header />
    </>
  )
}

export default App
