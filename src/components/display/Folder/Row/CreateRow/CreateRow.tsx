import { FC } from 'react'
import styles from './CreateRow.module.scss'
import { FilePlus } from 'lucide-react'
interface IProps {}

const CreateRow: FC<IProps> = ({}) => {
  return (
    <div className={styles['create-row']}>
      <div className={styles.content}>
        <FilePlus className={styles.icon} />
      </div>
    </div>
  )
}

export default CreateRow
