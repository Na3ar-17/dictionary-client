import { X } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
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
import { TypeFolder } from '../../../types/folder.type'

interface IProps {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  type?: 'create' | 'edit'
  func?: any
  id?: string
}

const DialogWindow: FC<IProps> = ({
  isOpen,
  setOpen,
  func,
  type = 'create',
  id,
}) => {
  const { register, handleSubmit, reset } = useForm<TypeFolder>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TypeFolder> = async (values) => {
    func(values)

    if (type === 'edit') {
      const newValues = {
        ...values,
        id: id,
      }
      func(newValues)
    }

    reset()
    setOpen(false)
  }

  return (
    <>
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
              {type === 'create' ? 'Create new folder' : 'Rename folder'}
            </DialogTitle>
            <DialogDescription className={styles['dialog-description']}>
              Do not write a long name
            </DialogDescription>
          </DialogHeader>
          <form
            className="flex flex-col gap-7"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.body}>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="name" className={styles.label}>
                  Name :
                </label>
                <input
                  {...register('title', { required: true })}
                  id="name"
                  autoComplete="off"
                  className={styles.input}
                />
              </div>
            </div>
            <DialogFooter className={styles['dialog-footer']}>
              <button type="submit" className={styles['btn-save']}>
                {type === 'create' ? 'Create' : 'Save'}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DialogWindow
