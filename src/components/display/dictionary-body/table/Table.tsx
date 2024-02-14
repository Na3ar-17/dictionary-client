import { FC, useState } from 'react'
import styles from './Table.module.scss'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from '@radix-ui/react-context-menu'
import { BookCheck, Eye, EyeOff, Pencil, Trash2 } from 'lucide-react'
import { ContextMenuShortcut } from '../../../../../@/components/ui/context-menu'
import { useDeleteRow } from '../../../ui/sheet-menu/utils/useDeleteRow'
import { useRow } from '../../../../api/hooks/useRow'
import { Link } from 'react-router-dom'

interface IProps {
  setOpenSheet: any
  setType: any
  setRowId: any
  folderId: string
  openSheet: boolean
}

const Table: FC<IProps> = ({
  setOpenSheet,
  setRowId,
  setType,
  folderId,
  openSheet,
}) => {
  const { handleDeleteRow } = useDeleteRow()
  const { data, isSuccess } = useRow(folderId ? folderId : '0')
  const [isHidden, setIsHidden] = useState<boolean>(false)

  return (
    <section className={styles.container}>
      <div className={styles.utils}>
        <Link to={`/testing/${folderId}`}>
          <BookCheck className="absolute left-[-90px] text-icons" />
        </Link>

        {isHidden ? (
          <Eye
            size={28}
            onClick={() => setIsHidden(!isHidden)}
            className={styles.icon}
          />
        ) : (
          <EyeOff
            size={28}
            onClick={() => setIsHidden(!isHidden)}
            className={styles.icon}
          />
        )}
      </div>
      <table className={styles.table}>
        <tbody>
          <tr style={{ userSelect: 'none' }}>
            <th>Word or Letter</th>
            <th>Translation</th>
          </tr>
          {isSuccess ? (
            data.map((el) => (
              <tr className={styles.tr} key={el.id}>
                <td>
                  <ContextMenu>
                    <ContextMenuTrigger className="w-full">
                      {el.word}
                    </ContextMenuTrigger>
                    <ContextMenuContent className="rounded-md px-[3px] py-[4px] bg-modals z-40">
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
                </td>
                <td
                  className={`${styles.translation} ${
                    isHidden ? styles.hidden : ''
                  }`}
                >
                  {el.translation}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>error</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default Table
