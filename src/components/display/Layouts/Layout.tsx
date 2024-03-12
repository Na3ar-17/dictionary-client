import React from 'react'
import styles from './Layout.module.scss'
import { motion } from 'framer-motion'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={styles.header}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Dictionary
      </motion.h1>
      {/* <div className={styles.area}>
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
      </div> */}
      {children}
    </header>
  )
}

export default Layout
