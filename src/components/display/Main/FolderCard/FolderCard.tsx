import { FC } from 'react'
import styles from './FolderCard.module.scss'
import { IFolderCardData } from '../../../../types/folderCard.types'

interface IProps {
  data: IFolderCardData
}

const FolderCard: FC<IProps> = ({ data }) => {
  const { id, createdAt, itemsCount, slug, title } = data
  return (
    <div className={styles.card}>
      <p className={styles.heading}>{title}</p>
      <p>{createdAt}</p>
      <p>Items: {itemsCount}</p>
    </div>
  )
}

export default FolderCard
