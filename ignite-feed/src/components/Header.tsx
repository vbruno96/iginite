import styles from '../assets/css/Header.module.css'
import igniteLogo from '../../public/ignite.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
