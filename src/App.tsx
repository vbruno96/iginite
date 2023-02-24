import { Header } from "./components/Header"
import styles from './assets/css/App.module.css'
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>Teste</main>
      </div>
    </div>
  )
}

export default App
