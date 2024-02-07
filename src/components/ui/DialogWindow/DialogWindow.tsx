import { Dispatch, FC, SetStateAction } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../../@/components/ui/dialog'
import styles from './DialogWindow.module.scss'
import { X } from 'lucide-react'

interface IProps {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  title?: string
  description?: string
  buttonText?: string
  inputValue?: string
}

const DialogWindow: FC<IProps> = ({
  isOpen,
  setOpen,
  buttonText = 'Create',
  title = 'Create new folder',
  description = 'Do not write a long name',
}) => {
  return (
    <div>
      <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`}></div>
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className={styles.content}>
          <DialogClose
            asChild
            className="absolute right-4 top-2 cursor-pointer"
          >
            <X className={styles.icon} />
          </DialogClose>
          <DialogHeader className={styles['dialog-header']}>
            <DialogTitle className={styles['dialog-title']}>
              {title}
            </DialogTitle>
            <DialogDescription className={styles['dialog-description']}>
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className={styles.body}>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className={styles.label}>
                Name :
              </label>
              <input id="name" autoComplete="off" className={styles.input} />
            </div>
          </div>
          <DialogFooter className={styles['dialog-footer']}>
            <button className={styles['btn-save']}>{buttonText}</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogWindow
