import { FolderPlus } from 'lucide-react'
import DictionaryList from '../../components/common/DictionaryList/DictionaryList'
import styles from './MainPage.module.scss'
import DialogWindow from '../../components/ui/DialogWindow/DialogWindow'
import { useState } from 'react'
const MainPage = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <header className={styles.header}>
      <div className={styles.utils}>
        <FolderPlus className={styles.icon} onClick={() => setOpen(!open)} />
      </div>
      <DialogWindow isOpen={open} setOpen={setOpen} />
      <DictionaryList />
    </header>
  )
}

export default MainPage
