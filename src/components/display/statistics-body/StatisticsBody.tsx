import { Link, useParams } from 'react-router-dom'
import styles from './StatisticsBody.module.scss'
import { ArrowLeftToLine } from 'lucide-react'
import { useGetOneStatistics } from './utils/useGetOneStatistics'
const StatisticsBody = () => {
  const { folderId } = useParams()

  const { data, isSuccess } = useGetOneStatistics(folderId || '')

  return (
    <section className={styles.container}>
      <Link to="/">
        <ArrowLeftToLine className={styles['icon-back']} />
      </Link>
      <main className={styles.body}>
        {isSuccess ? (
          <div className={styles['tower-stats']}>
            <div className={styles.tower}>
              <p className={styles.info}>Correct answers</p>
              <div
                style={{
                  background: '#0b666a',
                  height: `${data[0] ? data[0].presentOfCorrectUnswers : 0}%`,
                }}
                className={styles.progress}
              >
                {data[0] ? data[0].presentOfCorrectUnswers : 0}
              </div>
            </div>
            <div className={styles.tower}>
              <p className={styles.info}>Wrong answers</p>
              <div
                style={{
                  background: '#600707',
                  height: `${
                    data[0] ? 100 - data[0].presentOfCorrectUnswers : 0
                  }%`,
                }}
                className={styles.progress}
              >
                {data[0] ? 100 - data[0].presentOfCorrectUnswers : 0}
              </div>
            </div>
          </div>
        ) : (
          <div>Error</div>
        )}
      </main>
    </section>
  )
}

export default StatisticsBody
