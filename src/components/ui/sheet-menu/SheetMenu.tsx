import { Dispatch, FC, SetStateAction } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../../../../@/components/ui/sheet'
import styles from './SheetMenu.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TypeRow } from '../../../types/row.type'
import Form from './Form'
import { useCreateRow } from './utils/useCreateRow'
import { useUpdateRow } from './utils/useUpdateRow'

interface IProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  type: 'create' | 'edit'
  folderId: string
  rowId?: string
}

const SheetMenu: FC<IProps> = ({
  open,
  setOpen,
  type = 'create',
  folderId,
  rowId,
}) => {
  const { handleCreateRow } = useCreateRow()

  const { handleUpdateRow } = useUpdateRow()

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
    } else {
      const newParams = {
        ...values,
        folderId,
        rowId,
      }
      handleUpdateRow(newParams)
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
            <Form
              type={type}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              folderId={folderId}
              rowId={rowId ? rowId : ''}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default SheetMenu
