import { FC } from 'react'
import styles from './BookMark.module.scss'
import { ChevronUp, Trash2 } from 'lucide-react'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import Loader from '../../ui/loader/Loader'

interface IProps {
  title: string
  children: React.ReactNode
  createdAt: string
}

type TypeisBookMarkHidden = 'true' | 'false'

const BookMark: FC<IProps> = ({ title, children, createdAt }) => {
  const [isHidden, setIsHidden, isLoading] =
    useLocalStorage<TypeisBookMarkHidden>({
      defaultValue: 'false',
      key: 'isBookMarkHidden',
    })

  if (isLoading) return <Loader />

  return (
    <div
      className={`${styles['book-mark']} ${isHidden === 'true' ? styles.hidden : ''}`}
    >
      <div className={styles['book-mark-content']}>
        <p className={styles.title}>
          {title}
          <span>{createdAt}</span>
        </p>
        <div className="flex items-center gap-4">
          <Trash2 className={styles['icon-action']} />
          <ChevronUp
            className={`${styles.icon} ${isHidden === 'true' ? 'rotate-180' : ''}`}
            onClick={() => setIsHidden(isHidden === 'true' ? 'false' : 'true')}
          />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default BookMark
