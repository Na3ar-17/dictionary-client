import { useState } from 'react'
import styles from './MainPageBody.module.scss'
import { FolderPlus } from 'lucide-react'
import DictionaryList from '../../common/dictionary-list/DictionaryList'
import DialogWindow from '../../ui/dialog-window/DialogWindow'
import { useCreateFolder } from './utils/useCreateFolder'

const MainPageBody = () => {
  const [open, setOpen] = useState<boolean>(false)

  const { handleCreateFolder } = useCreateFolder()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.utils}>
          <FolderPlus className={styles.icon} onClick={() => setOpen(!open)} />
        </div>
      </header>
      <DialogWindow isOpen={open} setOpen={setOpen} func={handleCreateFolder} />
      <DictionaryList />
    </>
  )
}

export default MainPageBody
