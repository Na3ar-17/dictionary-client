import NavBar from '../../common/Navbar/NavBar'
import { QueryProvider } from '../../providers/queryProvider'
import styles from './layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <main className={styles.layout}>
        <NavBar notificationsCount={0} />
        <div className={styles.content}>{children}</div>
      </main>
    </QueryProvider>
  )
}

export default Layout
