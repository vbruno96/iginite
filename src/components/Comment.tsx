import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../assets/css/Comment.module.css'

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void
} 

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount(prevLikecount => prevLikecount + 1)
  }

  function handleDeletecomment() {
    onDeleteComment(content)
  }

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
            <button onClick={handleDeletecomment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{ content }</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
