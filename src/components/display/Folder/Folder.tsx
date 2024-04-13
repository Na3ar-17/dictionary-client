import { FC, useEffect, useState } from 'react'
import styles from './Folder.module.scss'
import Row from './Row/Row'
import CreateRow from './Row/CreateRow/CreateRow'
import { useCreateRow, useGetRows } from '../../../api/hooks/row'
import Error from '../../ui/error/Error'
import Loader from '../../ui/loader/Loader'
import { IRow } from '../../../types/row.types'

interface IProps {
  id?: string
  bookMarkId: string
}

const Folder: FC<IProps> = ({ id, bookMarkId }) => {
  const { data, isSuccess, isLoading } = useGetRows(id || '')

  if (!isSuccess) return <Error text="Can'n fetch rows " />
  if (isLoading) return <Loader />
  return (
    <main className={styles.container}>
      <div className={styles['folder-name']}></div>
      <div className={styles.content}>
        <table className={styles.table}>
          <tbody>
            <CreateRow bookMarkId={bookMarkId} id={id || ''} />

            {data.map((row) => (
              <Row data={row} key={row.id} />
            ))}
          </tbody>
        </table>

        {/* <div className={styles.transcription}>Ворант то серч</div> */}
      </div>
    </main>
  )
}

export default Folder
