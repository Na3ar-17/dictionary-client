import { FolderPen, MoreHorizontal, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../../../../@/components/ui/dropdown-menu'
import styles from './DropDownMenuComponent.module.scss'
import { FC, useState } from 'react'
import DialogWindow from '../DialogWindow/DialogWindow'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../../api/keys'
import { updateFolder } from '../../../api/services/folder.cervice'
import { IFolderData } from '../../../interfaces/folder.iterface'

interface IProps {
  id: number
}

const DropdownMenuComponent: FC<IProps> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false)
  const queruClient = useQueryClient()
  console.log(id)

  const { mutate: handleUpdateFolder } = useMutation({
    mutationKey: [KEYS.FOLDER_UPDATE],
    mutationFn: (params: IFolderData[]) => updateFolder(params, id.toString()),
    onSuccess: () => {
      queruClient.invalidateQueries({ queryKey: [KEYS.FOLDER] })
    },
  })
  return (
    <>
      <div className="absolute">
        <DialogWindow
          isOpen={open}
          setOpen={setOpen}
          title="Rename folder"
          buttonText="Save"
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
              <DropdownMenuItem className={styles.item}>
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
    </>
  )
}

export default DropdownMenuComponent
