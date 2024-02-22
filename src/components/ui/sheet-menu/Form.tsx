import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import styles from './Form.module.scss'
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'
import { TypeRow } from '../../../types/row.type'
import { useGetOneRow } from './utils/useGetOneRow'

interface IProps {
  type: 'create' | 'edit'
  handleSubmit: UseFormHandleSubmit<TypeRow, TypeRow>
  register: UseFormRegister<TypeRow>
  onSubmit: SubmitHandler<TypeRow>
  folderId: string
  rowId: string
  firstInput: string
  secondInput: string
  setFirstInput: Dispatch<SetStateAction<string>>
  setSecondInput: Dispatch<SetStateAction<string>>
  transcriptionInput: string
  setTranscriptionInput: Dispatch<SetStateAction<string>>
}

const Form: FC<IProps> = ({
  type,
  register,
  handleSubmit,
  onSubmit,
  folderId,
  rowId,
  firstInput,
  secondInput,
  setFirstInput,
  setSecondInput,
  setTranscriptionInput,
  transcriptionInput,
}) => {
  const { data } = useGetOneRow(folderId, rowId)

  useLayoutEffect(() => {
    if (type === 'create') {
      setFirstInput('')
      setSecondInput('')
      setTranscriptionInput('')
    } else {
      setFirstInput(data ? data.word : '')
      setSecondInput(data ? data.translation : '')
      setTranscriptionInput(data ? data.transcription : '')
    }
  }, [data])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.content}>
        <div className={styles['inputs']}>
          <div className={styles['input-container']}>
            <label className={styles.label} htmlFor="word">
              <input
                {...register('word', { required: true })}
                className={styles.input}
                type="text"
                id="word"
                autoComplete="off"
                value={firstInput}
                placeholder="Word or letter"
                onChange={(e) => setFirstInput(e.target.value)}
              />
            </label>
          </div>
          <div className={styles['input-container']}>
            <label className={styles.label} htmlFor="translation">
              <input
                {...register('translation', { required: true })}
                className={styles.input}
                type="text"
                id="translation"
                autoComplete="off"
                value={secondInput}
                placeholder="Translation"
                onChange={(e) => setSecondInput(e.target.value)}
              />
            </label>
          </div>
          <div className={styles['input-container']}>
            <label className={styles.label} htmlFor="transcription">
              <input
                {...register('transcription')}
                className={styles.input}
                type="text"
                id="transcription"
                autoComplete="off"
                placeholder="Transcription"
                value={transcriptionInput}
                onChange={(e) => setTranscriptionInput(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button className={styles.button} type="submit">
          {type === 'create' ? 'Create' : 'Save changes'}
        </button>
      </div>
    </form>
  )
}

export default Form
