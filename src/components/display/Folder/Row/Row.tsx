import { FC, useState } from 'react'
import styles from './Row.module.scss'
import TooltipComponent from '../../../ui/tooltip-component/TooltipComponent'
import { Check, Pencil, Trash2 } from 'lucide-react'
import { IRow, TypeEditRow } from '../../../../types/row.types'
import { useDeleteRow, useUpdateRow } from '../../../../api/hooks/row'

interface IProps {
  data: IRow
  isLayout?: boolean
}

const Row: FC<IProps> = ({ data, isLayout = false }) => {
  const { folderId, id, transcription, translation, word, bookMarkId } = data

  const [values, setValues] = useState({
    word: word,
    translation: translation,
  })

  const [isEdit, setIsEdit] = useState<boolean>(false)

  const { mutate: deleteRow } = useDeleteRow(folderId, bookMarkId, id)
  const { mutate: updateRow } = useUpdateRow()

  const handleUpdateRow = (dto: TypeEditRow) => {
    updateRow(dto)
  }

  return (
    <>
      <div className={`${styles.container} ${isEdit && styles.edit}`}>
        <div className={styles.icons}>
          <Pencil className={styles.icon} />
          <Check className={styles.icon} />
          <Trash2 className={styles.icon} />
        </div>
        <div className={styles.letter}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam
          exercitationem commodi autem perferendis quis ipsum minima voluptates
          saepe odit.
        </div>
        <div className={styles.translation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officia
          quisquam quibusdam quis alias tempore doloribus similique est,
          corrupti natus illum minus, fugiat ex sit aut provident animi
          corporis, architecto temporibus fuga tempora mollitia ipsam. Eius non
          fuga voluptatum?
        </div>
        {isEdit && <div className={styles.transcription}></div>}
      </div>
    </>
  )
}

export default Row
