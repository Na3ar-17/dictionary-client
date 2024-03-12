import { useState } from 'react'
import styles from './MainPageBody.module.scss'
import { FolderPlus } from 'lucide-react'
import DictionaryList from '../../common/dictionary-list/DictionaryList'
import DialogWindow from '../../ui/dialog-window/DialogWindow'
import { useCreateFolder } from './utils/useCreateFolder'
import { motion } from 'framer-motion'

const MainPageBody = () => {
  const [open, setOpen] = useState<boolean>(false)

  const { handleCreateFolder } = useCreateFolder()

  return (
    <>
      <header className={styles.header}>
        <motion.div
          initial={{ opacity: 0, translateX: 30 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.utils}
        >
          <FolderPlus className={styles.icon} onClick={() => setOpen(!open)} />
        </motion.div>
      </header>
      <DialogWindow isOpen={open} setOpen={setOpen} func={handleCreateFolder} />
      <DictionaryList />
    </>
  )
}

export default MainPageBody
