import { Header } from "./components/Header"
import styles from './assets/css/App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

function App() {

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
