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
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../api/keys'
import { deleteRow, updateRow } from '../../api/services/row.service'
import { IRowData } from '../../interfaces/row.interface'

const Dictionary = () => {
  const [openSheet, setOpenSheet] = useState<boolean>(false)
  const [type, setType] = useState<'create' | 'edit'>('create')
  const { folderId } = useParams()
  const [rowId, setRowId] = useState<string>('')
  const queryClient = useQueryClient()

  const { data, isSuccess, refetch } = useRow(
    folderId !== undefined ? folderId : '0'
  )

  const { mutate: handleDeleteRow } = useMutation({
    mutationKey: [KEYS.ROW_DELETE],
    mutationFn: ({ folderId, rowId }: { folderId: string; rowId: string }) =>
      deleteRow(folderId, rowId),
    onSuccess: () => {
      refetch()
    },
  })

  const { mutate: handleUpdateRow } = useMutation({
    mutationKey: [KEYS.ROW_UPDATE],
    mutationFn: (params: IRowData) => updateRow(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.ROW] })
    },
  })

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
                            setRowId(el.id)
                          }}
                          className=" hover:opacity-70 transition-all text-background flex justify-between items-center px-1"
                        >
                          <div className="flex items-center">
                            <Pencil size={15} />
                            Edit
                          </div>
                          <ContextMenuShortcut>Shift + D</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem
                          onClick={() => {
                            handleDeleteRow({
                              folderId: folderId !== undefined ? folderId : '0',
                              rowId: el.id.toString(),
                            })
                          }}
                          className=" hover:opacity-70 transition-all text-background flex justify-between items-center px-1"
                        >
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
      <SheetMenu
        folderId={folderId !== undefined ? folderId : '0'}
        type={type}
        open={openSheet}
        setOpen={setOpenSheet}
        mutation={handleUpdateRow}
        rowId={rowId}
      />
    </section>
  )
}

export default Dictionary
