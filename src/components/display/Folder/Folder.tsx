import { FC } from 'react'
import styles from './Folder.module.scss'
import Row from './Row/Row'
import CreateRow from './Row/CreateRow/CreateRow'
import { useGetRows } from '../../../api/hooks/row'
import Error from '../../ui/error/Error'
import Loader from '../../ui/loader/Loader'
import { Link } from '@tanstack/react-router'
import { useGetOneFolder } from '../../../api/hooks/folder'

interface IProps {
  id: string
  bookMarkId: string
}

const Folder: FC<IProps> = ({ id, bookMarkId }) => {
  const { data, isSuccess, isLoading } = useGetRows(id || '')
  const { data: folderData, isSuccess: isFolderSuccess } = useGetOneFolder(
    id,
    bookMarkId
  )

  const path = `/folder/${id}/${bookMarkId}/testing`

  if (!isFolderSuccess) return <Error text="Can'n fetch folder" />

  if (!isSuccess) return <Error text="Can'n fetch rows " />
  if (isLoading) return <Loader />

  return (
    <main className={styles.container}>
      <Link to={path}>Go to test</Link>
      <p>Items count: {folderData.itemsCount}</p>
      <div className={styles.content}>
        <table className={styles.table}>
          <div className={styles.links}></div>
          <tbody>
            <CreateRow bookMarkId={bookMarkId} id={id || ''} />
            {data.map((row) => (
              <Row data={row} key={row.id} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Folder
