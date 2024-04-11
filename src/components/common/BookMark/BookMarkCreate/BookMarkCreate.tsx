import { FC } from 'react'
import styles from './BookMarkCreate.module.scss'
import { BookmarkPlus } from 'lucide-react'

const BookMarkCreate: FC = () => {
  return (
    <div className={styles['book-mark-create']}>
      <div className={styles['book-mark-create-content']}>
        <BookmarkPlus strokeWidth={1.5} className={styles.icon} />
      </div>
    </div>
  )
}

export default BookMarkCreate
