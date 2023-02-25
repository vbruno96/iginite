import styles from '../assets/css/Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/vbruno96.png" hasBorder />
          <div className={styles.authorInfo}>
            <strong>Bruno Vinícius</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="24 de Fevereiro às 17:26h"
          dateTime="2023-02-24 17:26:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">👉 brunovm.dev/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>&nbsp;
          <a href="#">#nlw</a>&nbsp;
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />
       <footer>
        <button type="submit">Publicar</button>
       </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
