import styles from './DictionaryItem.module.scss'
import DropdownMenuComponent from '../../ui/dropdown-menu/DropdownMenuComponent'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface IProps {
  title: string
  itemsCount: number
  id: number
}

const DictionaryItem: FC<IProps> = ({ title, itemsCount, id }) => {
  return (
    <motion.div className={styles.item}>
      <DropdownMenuComponent id={id.toString()} />
      <p className={styles.title}>
        <Link to={`/dictionary/${id}`}>{title}</Link>
      </p>
      <p className={styles['items-count']}>
        <span>items:</span> {itemsCount}
      </p>
    </motion.div>
  )
}

export default DictionaryItem
