import { FC } from 'react'
import styles from './Folder.module.scss'
import Row from './Row/Row'
import CreateRow from './Row/CreateRow/CreateRow'
import { useGetRows } from '../../../api/hooks/row'
import Error from '../../ui/error/Error'
import Loader from '../../ui/loader/Loader'
import { Link } from '@tanstack/react-router'

interface IProps {
  id?: string
  bookMarkId: string
}

const Folder: FC<IProps> = ({ id, bookMarkId }) => {
  const { data, isSuccess, isLoading } = useGetRows(id || '')

  const path = `/folder/${id}/${bookMarkId}/testing`

  if (!isSuccess) return <Error text="Can'n fetch rows " />
  if (isLoading) return <Loader />

  return (
    <main className={styles.container}>
      <Link to={path}>Go to test</Link>
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
