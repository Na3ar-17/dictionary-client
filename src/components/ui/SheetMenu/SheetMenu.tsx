import { Dispatch, FC, SetStateAction } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '../../../../@/components/ui/sheet'
import styles from './SheetMenu.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TypeRow } from '../../../types/row.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../../api/keys'
import { createRow } from '../../../api/services/row.service'
import { IRowData } from '../../../interfaces/row.interface'

interface IProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  type: 'create' | 'edit'
  folderId: string
  mutation?: any
  rowId?: string
}

const SheetMenu: FC<IProps> = ({
  open,
  setOpen,
  type = 'create',
  folderId,
  mutation,
  rowId,
}) => {
  const queryClient = useQueryClient()
  const { mutate: handleCreateRow } = useMutation({
    mutationKey: [KEYS.ROW_CREATE],
    mutationFn: (params: IRowData) => createRow(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.ROW] })
    },
  })

  const { register, handleSubmit, reset } = useForm<TypeRow>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TypeRow> = async (values) => {
    if (type === 'create') {
      const newParams = {
        ...values,
        folderId,
      }

      handleCreateRow(newParams)
      reset()
      setOpen(!open)
    } else if (type === 'edit') {
      const newParams = {
        ...values,
        folderId,
        rowId,
      }
      mutation(newParams)
      reset()
      setOpen(!open)
    }
  }
  return (
    <>
      <div className={`${styles.overlay} ${open ? styles.active : ''}`}></div>
      <Sheet open={open} onOpenChange={() => setOpen(!open)}>
        <SheetContent side={'top'} className={styles.sheet}>
          <SheetHeader className="text-start">
            <SheetTitle className="text-2xl font-semibold">
              {type === 'create' ? 'Add new row' : 'Edit row'}
            </SheetTitle>
            <SheetDescription className="text-xl">
              {type === 'create'
                ? 'Write word and translation'
                : "Make changes to your row here. Click save when you're done."}
            </SheetDescription>
          </SheetHeader>
          <div className={styles['sheet-body']}>
            <div className={styles.create}>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles['input-container']}>
                  <label className={styles.label} htmlFor="word">
                    Word :
                    <input
                      {...register('word')}
                      className={styles.input}
                      type="text"
                      id="word"
                      autoComplete="off"
                    />
                  </label>
                </div>
                <div className={styles['input-container']}>
                  <label className={styles.label} htmlFor="translation">
                    Translation :
                    <input
                      {...register('translation')}
                      className={styles.input}
                      type="text"
                      id="translation"
                      autoComplete="off"
                    />
                  </label>
                </div>
                <button
                  className="w-32 bg-dark-green text-center h-8 rounded-sm font-semibold mt-8 active:scale-105 transition-all"
                  type="submit"
                >
                  {type === 'create' ? 'Create' : 'Save changes'}
                </button>
              </form>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default SheetMenu
