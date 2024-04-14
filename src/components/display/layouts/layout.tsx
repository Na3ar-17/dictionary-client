import NavBar from '../../common/Navbar/NavBar'
import { QueryProvider } from '../../providers/queryProvider'
import styles from './layout.module.scss'
import { Toaster } from 'sonner'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <main className={styles.layout}>
        <NavBar />
        <div className={styles.content}>{children}</div>
      </main>
      <Toaster position="bottom-right" theme="dark" />
    </QueryProvider>
  )
}

export default Layout
