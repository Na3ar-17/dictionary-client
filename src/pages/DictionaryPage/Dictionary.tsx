import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '../../../@/components/ui/context-menu'

import { ArrowLeftToLine, FilePlus, Pencil, Trash2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import styles from './Dictionary.module.scss'
import SheetMenu from '../../components/ui/SheetMenu/SheetMenu'
import { useState } from 'react'
import { useRow } from '../../api/hooks/useRow'

const Dictionary = () => {
  const [openSheet, setOpenSheet] = useState<boolean>(false)
  const [type, setType] = useState<'create' | 'edit'>('create')
  const { folderId } = useParams()

  const { data, isSuccess } = useRow(folderId !== undefined ? folderId : '0')

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeftToLine className={styles['icon-back']} />
          </Link>
          <h2>Programming Terms</h2>
        </div>
        <div className={styles.utils}>
          <FilePlus
            onClick={() => {
              setOpenSheet(!openSheet)
              setType('create')
            }}
            size={30}
            className={styles.icon}
          />
        </div>
      </header>
      <main className={styles.body}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Word</th>
              <th>Translation</th>
            </tr>
            {isSuccess ? (
              data.map((el) => (
                <tr className={styles.tr} key={el.id}>
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <td className={styles.word}>{el.word}</td>
                    </ContextMenuTrigger>
                    <ContextMenuContent className="rounded-md px-[3px] py-[4px] bg-sage">
                      <div className="w-[160px] cursor-pointer flex justify-center flex-col gap-y-1">
                        <ContextMenuItem
                          onClick={() => {
                            setOpenSheet(!openSheet)
                            setType('edit')
                          }}
                          className=" hover:opacity-70 transition-all text-background flex justify-between items-center px-1"
                        >
                          <div className="flex items-center">
                            <Pencil size={15} />
                            Edit
                          </div>
                          <ContextMenuShortcut>Shift + D</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem className=" hover:opacity-70 transition-all text-background flex justify-between items-center px-1">
                          <div className="flex items-center">
                            <Trash2 size={15} />
                            Delete
                          </div>
                          <ContextMenuShortcut>Shift + R</ContextMenuShortcut>
                        </ContextMenuItem>
                      </div>
                    </ContextMenuContent>
                  </ContextMenu>
                  <td className={styles.translation}>{el.translation}</td>
                </tr>
              ))
            ) : (
              <div>error</div>
            )}
          </tbody>
        </table>
      </main>
      <SheetMenu type={type} open={openSheet} setOpen={setOpenSheet} />
    </section>
  )
}

export default Dictionary
