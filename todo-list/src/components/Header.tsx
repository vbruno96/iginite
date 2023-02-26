import styles from '../assets/css/Header.module.css'
import Logo from '/todo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Icone de foguete" />
        <strong>to<span>do</span></strong>
      </div>
    </header>
  )
}
