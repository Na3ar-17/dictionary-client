import { FC } from 'react'
import styles from './FolderCardCreate.module.scss'
import { FolderPlus } from 'lucide-react'
import { useCreateFolder } from '../../../../../api/hooks/folder'
interface IProps {
  bookMarkId: string
}

const FolderCardCreate: FC<IProps> = ({ bookMarkId }) => {
  const { createFolder } = useCreateFolder(bookMarkId)
  return (
    <div onClick={() => createFolder()} className={styles.card}>
      <div className={styles.content}>
        <FolderPlus strokeWidth={1.5} className={styles.icon} />
      </div>
    </div>
  )
}

export default FolderCardCreate
