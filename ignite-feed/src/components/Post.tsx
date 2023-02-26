import { InvalidEvent, FormEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from '../assets/css/Post.module.css'

type Author = {
  avatarUrl: string
  name: string
  role: string
}

type ContentPost = {
  type: 'paragraph' | 'link'
  content: string
}

export type PostType = {
  id: number
  author: Author
  publishedAt: Date
  content: ContentPost[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(['Muito bom Devon, parabéns!! 👏👏 '])
  const [newComment, setNewComment] = useState('')
  
  const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newComment.length === 0

  function formatContentPost(content: ContentPost[]) {
    const formatedContentPost = content.map(line => {
      switch (line.type) {
        case 'paragraph':
          return <p key={line.content}>{line.content}</p>
        
        case 'link':
          return <a key={line.content} href='#'>{line.content}</a>

      }
    })
    return (
      <>
        {formatedContentPost}
      </>
    )
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments(prevComments => [newComment, ...prevComments])
    setNewComment('')
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDeleted: string) {
    const commetsWithoutDeletedOn = comments.filter(comment => comment !== commentToDeleted)
    setComments(commetsWithoutDeletedOn)
  }
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={ post.author.avatarUrl } hasBorder />
          <div className={styles.authorInfo}>
            <strong>{ post.author.name }</strong>
            <span>{ post.author.role }</span>
          </div>
        </div>
        <time
          title={ publishedDateFormated }
          dateTime={ post.publishedAt.toISOString() }
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        { formatContentPost(post.content) }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newComment}
          onChange={event => { setNewComment(event.target.value) }}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />
       <footer>
        <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
       </footer>
      </form>
      <div className={styles.commentList}>
        {
          comments.map(comment => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))
        }
      </div>
    </article>
  )
}
