import styles from './AlertWindow.module.scss'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../../../@/components/ui/alert-dialog'
import { Dispatch, FC, SetStateAction } from 'react'
import { UseMutateFunction } from '@tanstack/react-query'
import { IFolder } from '../../../interfaces/folder.iterface'

interface IProps {
  description: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  onClickFunction: UseMutateFunction<IFolder[], Error, void, unknown>
}

const AlertWindow: FC<IProps> = ({
  onClickFunction,
  description,
  open,
  setOpen,
}) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className={styles.content}>
        <AlertDialogHeader className={styles.header}>
          <AlertDialogTitle className="text-xl">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={styles.footer}>
          <AlertDialogCancel className={styles['btn-cancel']}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onClickFunction()}
            className={styles['btn-continue']}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertWindow
