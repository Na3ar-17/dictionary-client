import { FC } from 'react'
import styles from './Folder.module.scss'
import Row from './Row/Row'
import CreateRow from './Row/CreateRow/CreateRow'
import TooltipComponent from '../../ui/tooltip-component/TooltipComponent'

interface IProps {
  slug?: string
  bookMarkId: string
}

const Folder: FC<IProps> = ({ slug }) => {
  return (
    <main className={styles.container}>
      <div className={styles['folder-name']}>Folder 1</div>

      <div className={styles.content}>
        <table className={styles.table}>
          <tbody>
            <CreateRow />
            {Array.from({ length: 5 }).map((el) => (
              <Row />
            ))}
          </tbody>
        </table>

        {/* <div className={styles.transcription}>Ворант то серч</div> */}
      </div>
    </main>
  )
}

export default Folder
