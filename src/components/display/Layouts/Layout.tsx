import React from 'react'
import styles from './Layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={styles.header}>
      <h1>Dictionary</h1>
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {children}
    </header>
  )
}

export default Layout
