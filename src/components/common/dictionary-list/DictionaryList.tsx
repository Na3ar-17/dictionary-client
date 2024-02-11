import { useFolders } from '../../../api/hooks/useFolders'
import DictionaryItem from '../dictionary-item/DictionaryItem'
import styles from './DictionaryList.module.scss'
const DictionaryList = () => {
  const { data, isSuccess } = useFolders()
  return (
    <section className={styles['dictionary-list']}>
      {isSuccess ? (
        data.map((el) => (
          <DictionaryItem
            title={el.title}
            itemsCount={el.itemsCount}
            id={el.id}
            key={el.id}
          />
        ))
      ) : (
        <div>Error</div>
      )}
    </section>
  )
}

export default DictionaryList
