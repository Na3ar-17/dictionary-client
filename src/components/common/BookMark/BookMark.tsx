import { FC } from 'react'
import styles from './BookMark.module.scss'
import { ChevronDown } from 'lucide-react'

interface IProps {
  title: string
  children: React.ReactNode
}

const BookMark: FC<IProps> = ({ title, children }) => {
  return (
    <div className={styles['book-mark']}>
      <div className={styles['book-mark-content']}>
        <p className={styles.title}>{title}</p>
        <ChevronDown />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default BookMark
