import styles from './layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.layout}>{children}</main>
}

export default Layout
