import { FC } from 'react'
import styles from './Main.module.scss'
import BookMark from '../../common/BookMark/BookMark'
import FolderCard from './FolderCard/FolderCard'
import { folderCardData } from '../../../data/folderCard.data'
import BookMarkCreate from '../../common/BookMark/BookMarkCreate/BookMarkCreate'
import FolderCardCreate from './FolderCard/FolderCardCreate/FolderCardCreate'

const Main: FC = () => {
  return (
    <main className={styles.container}>
      <BookMarkCreate />
      <BookMark createdAt="10.04.2024 16:49" title="First Week">
        <FolderCardCreate />
        {folderCardData.map((card) => (
          <FolderCard data={card} key={card.id} />
        ))}
      </BookMark>
    </main>
  )
}

export default Main
