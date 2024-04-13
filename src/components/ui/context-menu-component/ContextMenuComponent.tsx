import { FC } from 'react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../shadcn/ui/context-menu'
import { Trash2, Pencil } from 'lucide-react'

interface IProps {
  children: React.ReactNode
  onDelete: () => void
  onEdit: () => void
}

const ContextMenuComponent: FC<IProps> = ({ children, onDelete, onEdit }) => {
  return (
    <ContextMenu modal={false}>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="bg-bg2">
        <ContextMenuItem
          onClick={onDelete}
          className="hover:bg-bg transition-all cursor-pointer flex items-center justify-between"
        >
          Delete
          <Trash2 className="size-4 text-red" />
        </ContextMenuItem>
        <ContextMenuItem
          onClick={onEdit}
          className="hover:bg-bg transition-all cursor-pointer flex items-center justify-between"
        >
          Edit
          <Pencil className="size-4" />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default ContextMenuComponent
