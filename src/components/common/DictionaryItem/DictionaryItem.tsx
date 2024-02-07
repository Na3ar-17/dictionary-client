import styles from './DictionaryItem.module.scss'
import DropdownMenuComponent from '../../ui/DropdownMenu/DropdownMenuComponent'
import { FC, useState } from 'react'

interface IProps {
  title: string
  itemsCount: number
  id: number
}

const DictionaryItem: FC<IProps> = ({ title, itemsCount, id }) => {
  return (
    <div className={styles.item}>
      <DropdownMenuComponent id={id} />
      <p className={styles.title}>{title}</p>
      <p className={styles['items-count']}>
        <span>items:</span> {itemsCount}
      </p>
    </div>
  )
}

export default DictionaryItem
