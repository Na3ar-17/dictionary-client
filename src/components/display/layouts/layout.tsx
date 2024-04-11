import NavBar from '../../common/Navbar/NavBar'
import styles from './layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.layout}>
      <NavBar notificationsCount={0} />
      <div className={styles.content}>{children}</div>
    </main>
  )
}

export default Layout
