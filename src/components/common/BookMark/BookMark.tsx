import { FC, useState } from 'react'
import styles from './BookMark.module.scss'
import { Check, ChevronUp, Pencil, Trash2 } from 'lucide-react'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import Loader from '../../ui/loader/Loader'
import {
  useBookMarkUpdate,
  useDeleteBookMark,
} from '../../../api/hooks/bookMark'

interface IProps {
  title: string
  children: React.ReactNode
  createdAt: string
  id: string
}

type TypeisBookMarkHidden = 'true' | 'false'

const BookMark: FC<IProps> = ({ title, children, createdAt, id }) => {
  const [isHidden, setIsHidden, isLoading] =
    useLocalStorage<TypeisBookMarkHidden>({
      defaultValue: 'false',
      key: 'isBookMarkHidden',
    })

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>(title)
  const { updateBookMark } = useBookMarkUpdate(id)

  const handleSave = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault()

      const dto = {
        title: value,
      }
      updateBookMark(dto)
      setIsEdit(!isEdit)
    }
  }

  const { deleteBookMark } = useDeleteBookMark(id)

  if (isLoading) return <Loader />

  return (
    <div
      className={`${styles['book-mark']} ${isHidden === 'true' ? styles.hidden : ''}`}
    >
      <div className={styles['book-mark-content']}>
        <p className={styles.title}>
          {isEdit ? (
            <input
              type="text"
              value={value}
              placeholder="Title here ..."
              onChange={(e) => {
                setValue(e.currentTarget.value)
              }}
              onKeyDown={handleSave}
            />
          ) : (
            <p>{title}</p>
          )}
          <span>{createdAt}</span>
        </p>
        <div className="flex items-center gap-4">
          <Pencil
            className={styles['icon-action']}
            onClick={() => setIsEdit(!isEdit)}
          />
          <Trash2
            onClick={() => deleteBookMark()}
            className={styles['icon-action']}
          />
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
