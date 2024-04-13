import { FC } from 'react'
import styles from './BookMarkCreate.module.scss'
import { BookmarkPlus } from 'lucide-react'
import { useCreateBookMark } from '../../../../api/hooks/bookMark'

const BookMarkCreate: FC = () => {
  const { createBookMark } = useCreateBookMark()
  return (
    <div
      className={styles['book-mark-create']}
      onClick={() => createBookMark()}
    >
      <div className={styles['book-mark-create-content']}>
        <BookmarkPlus strokeWidth={1.5} className={styles.icon} />
      </div>
    </div>
  )
}

export default BookMarkCreate
