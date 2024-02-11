import { FolderPen, MoreHorizontal, Trash2 } from 'lucide-react'
import { FC, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../../../../@/components/ui/dropdown-menu'
import DialogWindow from '../dialog-window/DialogWindow'
import styles from './DropDownMenuComponent.module.scss'
import AlertWindow from '../alert-dialog-window/AlertWindow'
import { useDeleteFolder } from './utils/useDeleteFolder'
import { useUpdateFolder } from './utils/useUpdateFolder'

interface IProps {
  id: string
}

const DropdownMenuComponent: FC<IProps> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [alertOpen, setAlertOpen] = useState<boolean>(false)

  const { handleDeleteFolder } = useDeleteFolder(id)
  const { handleUpdateFolder } = useUpdateFolder(id)

  return (
    <>
      <div className="absolute">
        <DialogWindow
          isOpen={open}
          setOpen={setOpen}
          func={handleUpdateFolder}
          type="edit"
          id={id}
        />
      </div>
      <div className="absolute right-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent className={styles.content}>
            <DropdownMenuGroup className="w-[160px] cursor-pointer flex justify-center flex-col gap-y-1">
              <DropdownMenuItem
                onClick={() => {
                  setAlertOpen(!alertOpen)
                }}
                className={styles.item}
              >
                <span>
                  <Trash2 size={17} className={styles.icon} />
                  Delete
                </span>
                <DropdownMenuShortcut className={styles['hot-key']}>
                  Shift + D
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setOpen(!open)
                  console.log(id)
                }}
                className={styles.item}
              >
                <span>
                  <FolderPen size={17} className={styles.icon} />
                  Rename
                </span>
                <DropdownMenuShortcut className={styles['hot-key']}>
                  Shift + R
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <AlertWindow
        open={alertOpen}
        description={
          'This action cannot be undone. This will permanently delete this folder'
        }
        onClickFunction={handleDeleteFolder}
        setOpen={setAlertOpen}
      />
    </>
  )
}

export default DropdownMenuComponent
