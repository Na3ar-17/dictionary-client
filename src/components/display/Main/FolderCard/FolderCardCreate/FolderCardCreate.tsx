import { FC } from 'react'
import styles from './FolderCardCreate.module.scss'
import { FolderPlus } from 'lucide-react'
const FolderCardCreate: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <FolderPlus strokeWidth={1.5} className={styles.icon} />
      </div>
    </div>
  )
}

export default FolderCardCreate
