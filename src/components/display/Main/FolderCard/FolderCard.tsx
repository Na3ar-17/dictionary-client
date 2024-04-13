import { FC } from 'react'
import styles from './FolderCard.module.scss'
import { IFolderCardData } from '../../../../types/folderCard.types'
import { Link } from '@tanstack/react-router'

interface IProps {
  data: IFolderCardData
}

const FolderCard: FC<IProps> = ({ data }) => {
  const { id, createdAt, itemsCount, slug, title, bookMarkId } = data
  const toPath = `/folder/${id}/${bookMarkId}`
  return (
    <div className={styles.card}>
      <p className={styles.heading}>
        <Link to={toPath}>{title}</Link>
      </p>
      <div>
        <p>{createdAt}</p>
        <p>Items: {itemsCount}</p>
      </div>
    </div>
  )
}

export default FolderCard
