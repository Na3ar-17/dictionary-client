import { useState } from 'react'
import styles from './DictionaryBody.module.scss'
import { ArrowLeftToLine, FilePlus } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import SheetMenu from '../../ui/sheet-menu/SheetMenu'
import Table from './table/Table'
import { useGetOneFolder } from './utils/useGetOneFolder'

const DictionaryBody = () => {
  const [isOpenSheet, setOpenSheet] = useState<boolean>(false)
  const [type, setType] = useState<'create' | 'edit'>('create')
  const [rowId, setRowId] = useState<string>('')

  const { folderId } = useParams()

  const { data } = useGetOneFolder(folderId ? folderId : '')

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeftToLine className={styles['icon-back']} />
          </Link>
          <h2>{data?.title}</h2>
        </div>
        <div className={styles.utils}>
          <FilePlus
            onClick={() => {
              setOpenSheet(!isOpenSheet)
              setType('create')
            }}
            size={30}
            className={styles.icon}
          />
        </div>
      </header>
      <main className={styles.body}>
        <Table
          key={folderId}
          folderId={folderId || '0'}
          isOpenSheet={isOpenSheet}
          setOpenSheet={setOpenSheet}
          setRowId={setRowId}
          setType={setType}
        />
      </main>
      <SheetMenu
        folderId={folderId || '0'}
        type={type}
        open={isOpenSheet}
        setOpen={setOpenSheet}
        rowId={rowId}
      />
    </section>
  )
}

export default DictionaryBody
