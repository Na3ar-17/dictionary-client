import { Dispatch, FC, SetStateAction } from 'react'
import styles from './Row.module.scss'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from '@radix-ui/react-context-menu'
import { Pencil, Trash2 } from 'lucide-react'
import { ContextMenuShortcut } from '../../../../../../@/components/ui/context-menu'
import { IRow } from '../../../../../interfaces/row.interface'
import { useDeleteRow } from '../../../../ui/sheet-menu/utils/useDeleteRow'

interface IProps {
  el: IRow
  setOpenSheet: Dispatch<SetStateAction<boolean>>
  isOpenSheet: boolean
  setRowId: Dispatch<SetStateAction<string>>
  folderId: string
  isHidden: boolean
  setType: Dispatch<SetStateAction<'edit' | 'create'>>
}

const Row: FC<IProps> = ({
  el,
  setOpenSheet,
  isOpenSheet,
  folderId,
  isHidden,
  setRowId,
  setType,
}) => {
  const { handleDeleteRow } = useDeleteRow()
  return (
    <tr className={styles.tr} key={el.id}>
      <td>
        <ContextMenu>
          <ContextMenuTrigger className="w-full">{el.word}</ContextMenuTrigger>
          <ContextMenuContent className="rounded-md px-[3px] py-[4px] bg-modals z-40">
            <div className="w-[160px] cursor-pointer flex justify-center flex-col gap-y-1">
              <ContextMenuItem
                onClick={() => {
                  setOpenSheet(!isOpenSheet)
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
      <td className={`${styles.translation} ${isHidden ? styles.hidden : ''}`}>
        {el.translation}
      </td>
    </tr>
  )
}

export default Row
