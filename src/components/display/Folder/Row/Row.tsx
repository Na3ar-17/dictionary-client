import { FC, useState } from 'react'
import styles from './Row.module.scss'
import TooltipComponent from '../../../ui/tooltip-component/TooltipComponent'
import { Check, Pencil, Trash2 } from 'lucide-react'
import { IRow, TypeEditRow } from '../../../../types/row.types'
import { useDeleteRow, useUpdateRow } from '../../../../api/hooks/row'
import ContextMenuComponent from '../../../ui/context-menu-component/ContextMenuComponent'

interface IProps {
  data: IRow
  isLayout?: boolean
}

const Row: FC<IProps> = ({ data, isLayout = false }) => {
  const { folderId, id, transcription, translation, word, bookMarkId } = data

  const [values, setValues] = useState({
    word: word,
    translation: translation,
    transcription: transcription,
  })

  const [isEdit, setIsEdit] = useState<boolean>(false)

  const { mutate: deleteRow } = useDeleteRow(folderId, bookMarkId, id)
  const { mutate: updateRow } = useUpdateRow()

  const handleUpdateRow = (dto: TypeEditRow) => {
    updateRow(dto)
  }

  return (
    <>
      <ContextMenuComponent
        key={id}
        onDelete={deleteRow}
        onEdit={() => setIsEdit(!isEdit)}
      >
        <div className={`${styles.container} ${isEdit && styles.edit}`}>
          {isEdit && (
            <Check
              className={styles.icon}
              onClick={() => {
                const dto = {
                  ...values,
                  rowId: id,
                  folderId,
                }
                handleUpdateRow(dto)
                setIsEdit(!isEdit)
              }}
            />
          )}
          {isEdit ? (
            <input
              type="text"
              onChange={(e) => {
                setValues({
                  word: e.currentTarget.value,
                  transcription: values.transcription,
                  translation: values.translation,
                })
              }}
              value={values.word}
              placeholder="Letter here ..."
            />
          ) : (
            <TooltipComponent key={id} text={transcription || ''}>
              <div className={styles.letter}>{values.word}</div>
            </TooltipComponent>
          )}

          {isEdit ? (
            <input
              type="text"
              onChange={(e) => {
                setValues({
                  word: values.word,
                  transcription: values.transcription,
                  translation: e.currentTarget.value,
                })
              }}
              placeholder="Translation here ..."
              value={values.translation}
            />
          ) : (
            <div className={styles.translation}>{values.translation}</div>
          )}
          {isEdit && (
            <input
              type="text"
              onChange={(e) => {
                setValues({
                  word: values.word,
                  transcription: e.currentTarget.value,
                  translation: values.translation,
                })
              }}
              placeholder="Transcription here ..."
              value={values.transcription}
            />
          )}
        </div>
      </ContextMenuComponent>
    </>
  )
}

export default Row
