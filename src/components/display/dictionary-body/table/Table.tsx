import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './Table.module.scss'
import { BarChart3, BookCheck, Eye, EyeOff } from 'lucide-react'
import { useRow } from '../../../../api/hooks/useRow'
import { Link } from 'react-router-dom'
import Row from './Row/Row'
import { motion } from 'framer-motion'

interface IProps {
  setOpenSheet: Dispatch<SetStateAction<boolean>>
  setType: Dispatch<SetStateAction<'edit' | 'create'>>
  setRowId: Dispatch<SetStateAction<string>>
  folderId: string
  isOpenSheet: boolean
}

const Table: FC<IProps> = ({
  setOpenSheet,
  setRowId,
  setType,
  folderId,
  isOpenSheet,
}) => {
  const { data, isSuccess } = useRow(folderId ? folderId : '0')
  const [isHidden, setIsHidden] = useState<boolean>(false)

  return (
    <section className={styles.container}>
      <div className={styles.utils}>
        <Link to={`/testing/${folderId}`}>
          <BookCheck className="absolute left-[-90px] text-icons" />
        </Link>
        <Link to={`/statistics/${folderId}`}>
          <BarChart3 className="absolute left-[-130px] text-icons" />
        </Link>

        {isHidden ? (
          <Eye
            size={28}
            onClick={() => setIsHidden(!isHidden)}
            className={styles.icon}
          />
        ) : (
          <EyeOff
            size={28}
            onClick={() => setIsHidden(!isHidden)}
            className={styles.icon}
          />
        )}
      </div>
      <motion.table
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.2 }}
        className={styles.table}
      >
        <tbody>
          <tr style={{ userSelect: 'none' }}>
            <th>Word or Letter</th>
            <th>Translation</th>
          </tr>
          {isSuccess ? (
            data.map((el) => (
              <Row
                el={el}
                folderId={folderId}
                isHidden={isHidden}
                isOpenSheet={isOpenSheet}
                setOpenSheet={setOpenSheet}
                setRowId={setRowId}
                setType={setType}
                key={el.id}
              />
            ))
          ) : (
            <tr>
              <td>Error</td>
            </tr>
          )}
        </tbody>
      </motion.table>
    </section>
  )
}

export default Table
