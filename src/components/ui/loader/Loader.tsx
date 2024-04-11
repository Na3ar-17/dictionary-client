import { FC } from 'react'
import styles from './Loader.module.scss'
interface IProps {}

const Loader: FC<IProps> = ({}) => {
  return (
    <div className={styles.loader}>
      <div data-glitch="Loading..." className={styles.glitch}>
        Loading...
      </div>
    </div>
  )
}

export default Loader
