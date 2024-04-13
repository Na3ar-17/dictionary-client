import { FC } from 'react'
import { useGetFolders } from '../../../../../api/hooks/folder'
import FolderCard from '../FolderCard'
import Error from '../../../../ui/error/Error'
import Loader from '../../../../ui/loader/Loader'
import styles from './FolderContainer.module.scss'
interface IProps {
  bookMarkId: string
}

const FolderContainer: FC<IProps> = ({ bookMarkId }) => {
  const { data, isSuccess, isLoading } = useGetFolders(bookMarkId)

  if (!isSuccess) return <Error text="Can't fetch folders" />
  if (isLoading) return <Loader />

  return (
    <div className={styles.container}>
      {data.map((card) => (
        <FolderCard data={card} key={card.id} />
      ))}
    </div>
  )
}

export default FolderContainer
