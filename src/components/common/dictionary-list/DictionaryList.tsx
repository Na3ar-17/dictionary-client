import { useFolders } from '../../../api/hooks/useFolders'
import DictionaryItem from '../dictionary-item/DictionaryItem'
import styles from './DictionaryList.module.scss'
import { motion } from 'framer-motion'

const DictionaryList = () => {
  const { data, isSuccess } = useFolders()
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      className={styles['dictionary-list']}
    >
      {isSuccess ? (
        data.length > 0 ? (
          data.map((el) => (
            <DictionaryItem
              title={el.title}
              itemsCount={el.itemsCount}
              id={el.id}
              key={el.id}
            />
          ))
        ) : (
          <div className="text-2xl font-semibold">No items</div>
        )
      ) : (
        <div className="text-2xl font-semibold text-[#9d0909]">Error</div>
      )}
    </motion.section>
  )
}

export default DictionaryList
