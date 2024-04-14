import { FC, useState } from 'react'
import styles from './Testing.module.scss'
import { useGetRandomRow } from '../../../api/hooks/row'
import Error from '../../ui/error/Error'
import Loader from '../../ui/loader/Loader'

interface IProps {
  folderId: string
}

const Testing: FC<IProps> = ({ folderId }) => {
  const { data, isSuccess, isLoading, refetch } = useGetRandomRow(folderId)

  const [isIDontKnow, setIsIDontKnow] = useState<boolean>(false)

  const [isEnded, setIsEnded] = useState<boolean>(false)
  if (isLoading) return <Loader />
  if (!isSuccess) return <Error text="Cant fetch random row" />

  const { word, id, translation } = data

  const handleTestEnd = () => {
    if (data.next === 0) {
      setIsEnded(!isEnded)
    }
  }

  const handleIKnow = () => {
    handleTestEnd()
    refetch()
  }

  const handleIDontKnow = () => {
    setIsIDontKnow(!isIDontKnow)
    handleTestEnd()
    setTimeout(() => {
      setIsIDontKnow(false)
      refetch()
    }, 2 * 2000)
  }

  return (
    <main className={styles.container}>
      <div className={styles.modal}>
        {isEnded ? (
          <div className="h-full flex justify-center items-center gap-3 flex-col">
            <p className="text-xl font-bold">Your test has been ended</p>
            <button
              onClick={() => {
                setIsEnded(!isEnded)
                refetch()
              }}
              className="px-4 py-1 bg-green rounded-md active:translate-y-1 transition-all cursor-pointer"
            >
              Repet
            </button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <p className={styles.letter}>{word}</p>
            </div>
            <div className={styles.body}>
              <button
                disabled={isIDontKnow}
                style={{
                  cursor: isIDontKnow ? 'not-allowed' : 'pointer',
                  opacity: isIDontKnow ? 0.6 : 1,
                }}
                className={styles.btn}
                onClick={() => handleIKnow()}
              >
                I Know
              </button>
              <button
                style={{
                  cursor: isIDontKnow ? 'not-allowed' : 'pointer',
                  opacity: isIDontKnow ? 0.6 : 1,
                }}
                disabled={isIDontKnow}
                className={styles.btn}
                onClick={() => handleIDontKnow()}
              >
                I Don't Know
              </button>
            </div>
            {isIDontKnow && <div className={styles.footer}>{translation}</div>}
            <div
              className={`${styles.underLine} ${isIDontKnow && styles.underLineActive}`}
            ></div>
          </>
        )}
      </div>
    </main>
  )
}

export default Testing
