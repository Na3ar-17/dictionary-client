import { FC } from 'react'
import styles from './CreateRow.module.scss'
import { FilePlus } from 'lucide-react'
import { useCreateRow } from '../../../../../api/hooks/row'

interface IProps {
  bookMarkId: string
  id: string
}

const CreateRow: FC<IProps> = ({ bookMarkId, id }) => {
  const { mutate } = useCreateRow(id, bookMarkId)
  return (
    <div className={styles['create-row']} onClick={() => mutate()}>
      <div className={styles.content}>
        <FilePlus className={styles.icon} />
      </div>
    </div>
  )
}

export default CreateRow
