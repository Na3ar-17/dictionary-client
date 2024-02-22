import { Dispatch, FC, SetStateAction, useState } from 'react'
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

  const [firstInput, setFirstInput] = useState('')
  const [secondInput, setSecondInput] = useState('')
  const [transcriptionInput, setTranscriptionInput] = useState('')

  const onSubmit: SubmitHandler<TypeRow> = async (values) => {
    let word = values.word.charAt(0).toUpperCase() + values.word.slice(1)
    let translation =
      values.translation.charAt(0).toUpperCase() + values.translation.slice(1)
    let transcription =
      values.transcription.charAt(0).toLowerCase() +
      values.transcription.slice(1)

    const newValues = {
      word,
      translation,
      transcription,
    }

    if (type === 'create') {
      const params = {
        ...newValues,
        folderId,
      }
      handleCreateRow(params)
    } else {
      const params = {
        ...newValues,
        folderId,
        rowId,
      }
      handleUpdateRow(params)
    }

    setOpen(!open)
    setFirstInput('')
    setSecondInput('')
    reset()
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
              firstInput={firstInput}
              secondInput={secondInput}
              setFirstInput={setFirstInput}
              setSecondInput={setSecondInput}
              transcriptionInput={transcriptionInput}
              setTranscriptionInput={setTranscriptionInput}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default SheetMenu
