import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../assets/css/Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://github.com/vbruno96.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Vinícius</strong>
              <time
                title="24 de Fevereiro às 17:26h"
                dateTime="2023-02-24 17:26:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Bruno, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
