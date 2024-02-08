import { FolderPlus } from 'lucide-react'
import DictionaryList from '../../components/common/DictionaryList/DictionaryList'
import styles from './MainPage.module.scss'
import DialogWindow from '../../components/ui/DialogWindow/DialogWindow'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../api/keys'
import { IFolderData } from '../../interfaces/folder.iterface'
import { createFolder } from '../../api/services/folder.cervice'
const MainPage = () => {
  const [open, setOpen] = useState<boolean>(false)
  const queruClient = useQueryClient()

  const { mutate: handleCreateFolder } = useMutation({
    mutationKey: [KEYS.FOLDER_CREATE],
    mutationFn: (params: IFolderData[]) => createFolder(params),
    onSuccess: () => {
      queruClient.invalidateQueries({ queryKey: [KEYS.FOLDER] })
    },
  })

  return (
    <header className={styles.header}>
      <div className={styles.utils}>
        <FolderPlus className={styles.icon} onClick={() => setOpen(!open)} />
      </div>
      <DialogWindow isOpen={open} setOpen={setOpen} func={handleCreateFolder} />
      <DictionaryList />
    </header>
  )
}

export default MainPage
