import { FC } from 'react'
import styles from './Row.module.scss'
import TooltipComponent from '../../../ui/tooltip-component/TooltipComponent'
import { Pencil, Trash2 } from 'lucide-react'

interface IProps {
  letter?: string
  translation?: string
  transcription?: string
}

const Row: FC<IProps> = ({ translation, letter, transcription }) => {
  return (
    <tr>
      <span className={styles.icons}>
        <Pencil className={styles.icon} />
        <Trash2 className={styles.icon} />
      </span>
      <td className={styles.letter}>
        <TooltipComponent text={transcription || ''}>
          <p> I have a warant to search the premises</p>
        </TooltipComponent>
      </td>
      <td className={styles.translation}>
        У мене є одрер на обшук приміщення lorem100
      </td>
    </tr>
  )
}

export default Row
