import { Link, useParams } from 'react-router-dom'
import styles from './StatisticsBody.module.scss'
import { ArrowLeftToLine } from 'lucide-react'
const StatisticsBody = () => {
  const { folderId } = useParams()
  return (
    <section className={styles.container}>
      <Link to="/">
        <ArrowLeftToLine className={styles['icon-back']} />
      </Link>
      <main className={styles.body}>
        {/* <div className={styles['tower-stats']}>
          <div className={styles.tower}>
            <p className={styles.info}>Current answers</p>
            <div className={styles.progress}></div>
          </div>
          <div className={styles.tower}>
            <p className={styles.info}>Wrong answers</p>
            <div className={styles.progress}></div>
          </div>
        </div> */}
        <div className={styles['circle-box']}>
          <div className={styles.circle}>
            <div className={styles.overblock}></div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default StatisticsBody
