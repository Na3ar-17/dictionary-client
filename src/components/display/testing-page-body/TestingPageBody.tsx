import { FC, useState } from 'react'
import styles from './TestingPageBody.module.scss'
import { useGetRandomRow } from './utils/useGetRandomRow'
import { ArrowLeftToLine } from 'lucide-react'
import { Link } from 'react-router-dom'
import cookies from 'js-cookie'

interface IProps {
  folderId: string
}

const TestingPageBody: FC<IProps> = ({ folderId }) => {
  const [isStarted, setIsStarted] = useState<boolean>(
    cookies.get('isStarted') === 'true'
  )
  const [mistakes, setMistakes] = useState<number>(0)
  const [isIDontKnow, setIDontKnow] = useState<boolean>(false)

  const { data, isSuccess, refetch } = useGetRandomRow(folderId)

  const handleCheckTest = () => {
    refetch()
  }

  const handleEnd = () => {
    setIsStarted(!isStarted), setMistakes(0)
    cookies.set('isStarted', 'false')
  }

  const handleIDontKnow = () => {
    setIDontKnow(true)
    setTimeout(() => {
      setIDontKnow(false)
      refetch()
    }, 3000)
  }

  return (
    <section className={styles.container}>
      <Link to={`/dictionary/${folderId}`}>
        <ArrowLeftToLine className="text-icons absolute left-8 top-8" />
      </Link>
      {isStarted ? (
        <aside className={styles.block}>
          {isSuccess ? (
            <>
              <main className={styles.body}>
                <div
                  className={`${styles.underline} ${
                    isIDontKnow ? styles.active : ''
                  }`}
                ></div>
                <p className="text-[18px]">{data.word}</p>
                <div className="grid grid-cols-3 gap-8">
                  <button
                    disabled={isIDontKnow}
                    onClick={() => handleCheckTest()}
                    className={styles.button}
                  >
                    I know
                  </button>
                  <button
                    disabled={isIDontKnow}
                    className={styles.button}
                    onClick={() => handleIDontKnow()}
                  >
                    I dont know
                  </button>
                  <button
                    style={{ background: '#7d0707' }}
                    onClick={() => handleEnd()}
                    className={styles.button}
                  >
                    End
                  </button>
                </div>
              </main>
              <div className={styles.footer}>
                {isIDontKnow ? (
                  <div className={styles.translation}>{data.translation}</div>
                ) : (
                  ''
                )}
                {mistakes !== 0 ? (
                  <p className={styles.mistakes}>Mistakes :{mistakes}</p>
                ) : (
                  ''
                )}
              </div>
            </>
          ) : (
            <div>Error</div>
          )}
        </aside>
      ) : (
        <button
          onClick={() => {
            setIsStarted(!isStarted), cookies.set('isStarted', 'true')
          }}
          className={styles.button}
          style={{ marginTop: '100px' }}
        >
          Start test
        </button>
      )}
    </section>
  )
}

export default TestingPageBody
