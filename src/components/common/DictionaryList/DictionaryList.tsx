import { dictionaryData } from '../../../data/dictionaryItems.data'
import DictionaryItem from '../DictionaryItem/DictionaryItem'
import styles from './DictionaryList.module.scss'
const DictionaryList = () => {
  return (
    <section className={styles['dictionary-list']}>
      {dictionaryData.map((el) => (
        <DictionaryItem
          title={el.title}
          itemsCount={el.itemsCount}
          id={el.id}
          key={el.id}
        />
      ))}
    </section>
  )
}

export default DictionaryList
