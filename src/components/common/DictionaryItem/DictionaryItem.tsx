import styles from './DictionaryItem.module.scss'
import DropdownMenuComponent from '../../ui/DropdownMenu/DropdownMenuComponent'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  title: string
  itemsCount: number
  id: number
}

const DictionaryItem: FC<IProps> = ({ title, itemsCount, id }) => {
  return (
    <div className={styles.item}>
      <DropdownMenuComponent id={id} />
      <p className={styles.title}>
        <Link to={'/dictionary'}>{title}</Link>
      </p>
      <p className={styles['items-count']}>
        <span>items:</span> {itemsCount}
      </p>
    </div>
  )
}

export default DictionaryItem
