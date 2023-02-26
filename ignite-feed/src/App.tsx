import { Header } from "./components/Header"
import styles from './assets/css/App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/vbruno96.png",
      name: "Bruno Vinícius",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 brunovm.dev/doctorcare' },
    ],
    publishedAt: new Date('2023-02-24 17:26:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/120001931_2406550519646937_6264271098142251833_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Al46Zh20IlQAX_OsF7s&_nc_ht=scontent-gru2-2.xx&oh=00_AfBBaPRQ5waJ5O47pjkaRGnbCMYLqwWjJM36LeBJzYhP7w&oe=6421B8E9",
      name: "Maria Paula",
      role: "Internacionalista"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 brunovm.dev/doctorcare' },
    ],
    publishedAt: new Date('2023-02-25 13:35:00')
  },
]

function App() {

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                post={post}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}

export default App
