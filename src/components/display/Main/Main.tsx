import { FC, useEffect } from 'react'
import styles from './Main.module.scss'
import BookMark from '../../common/BookMark/BookMark'
import BookMarkCreate from '../../common/BookMark/BookMarkCreate/BookMarkCreate'
import FolderCardCreate from './FolderCard/FolderCardCreate/FolderCardCreate'
import { useGetBookMarks } from '../../../api/hooks/bookMark'
import Loader from '../../ui/loader/Loader'
import Error from '../../ui/error/Error'
import FolderContainer from './FolderCard/FolderContainer/FolderContainer'

const Main: FC = () => {
  const { data, isLoading, isSuccess } = useGetBookMarks()

  if (!isSuccess) return <Error text="Can't fetch book marks " />
  if (isLoading) return <Loader />

  return (
    <main className={styles.container}>
      <BookMarkCreate />
      {data.map((bookMark) => (
        <BookMark
          key={bookMark.id}
          createdAt={bookMark.createdAt}
          title={bookMark.title}
        >
          <FolderCardCreate />
          <FolderContainer bookMarkId={bookMark.id || ''} />
        </BookMark>
      ))}
    </main>
  )
}

export default Main
