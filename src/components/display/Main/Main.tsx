import { FC } from 'react'
import styles from './Main.module.scss'
import BookMark from '../../common/BookMark/BookMark'
import FolderCard from './FolderCard/FolderCard'
import { folderCardData } from '../../../data/folderCard.data'

const Main: FC = () => {
  return (
    <main className={styles.container}>
      <BookMark title="First Week">
        {folderCardData.map((card) => (
          <FolderCard data={card} key={card.id} />
        ))}
      </BookMark>
    </main>
  )
}

export default Main
