import React from 'react'
import styles from './Layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={styles.header}>
      <h1>Dictionary</h1>
      {children}
    </header>
  )
}

export default Layout
