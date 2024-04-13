import { FC, useState } from 'react'
import styles from './FolderCard.module.scss'
import { IFolderCardData } from '../../../../types/folderCard.types'
import { Link } from '@tanstack/react-router'
import ContextMenuComponent from '../../../ui/context-menu-component/ContextMenuComponent'
import { useDeleteFolder, useUpdateFolder } from '../../../../api/hooks/folder'

interface IProps {
  data: IFolderCardData
}

const FolderCard: FC<IProps> = ({ data }) => {
  const { id, createdAt, itemsCount, title, bookMarkId } = data
  const [value, setValue] = useState<string>(title || '')
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const toPath = `/folder/${id}/${bookMarkId}/rows`

  const { updateFolder } = useUpdateFolder(
    {
      title: value,
      bookMarkId,
    },
    id
  )
  const { deleteFolder } = useDeleteFolder(id, bookMarkId)

  const handleSave = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault()

      updateFolder()
      setIsEdit(!isEdit)
    }
  }

  return (
    <ContextMenuComponent
      onDelete={deleteFolder}
      onEdit={() => setIsEdit(!isEdit)}
    >
      <div className={styles.card}>
        <p className={styles.heading}>
          {isEdit ? (
            <input
              type="text"
              value={value}
              placeholder="Title here ..."
              onChange={(e) => {
                setValue(e.currentTarget.value)
              }}
              onKeyDown={handleSave}
            />
          ) : (
            <Link to={toPath}>{title}</Link>
          )}
        </p>
        <div>
          <p>{createdAt}</p>
          <p>Items: {itemsCount}</p>
        </div>
      </div>
    </ContextMenuComponent>
  )
}

export default FolderCard
