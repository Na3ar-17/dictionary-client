import { FC, useEffect, useLayoutEffect, useState } from 'react'
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
  setFirstInput: any
  setSecondInput: any
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
}) => {
  const { data } = useGetOneRow(folderId, rowId)

  useLayoutEffect(() => {
    if (type === 'create') {
      setFirstInput('')
      setSecondInput('')
    } else {
      setFirstInput(data ? data.word : '')
      setSecondInput(data ? data.translation : '')
    }
  }, [data])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles['input-container']}>
        <label className={styles.label} htmlFor="word">
          Word or Letter :
          <input
            {...register('word')}
            className={styles.input}
            type="text"
            id="word"
            autoComplete="off"
            value={firstInput}
            onChange={(e) => setFirstInput(e.target.value)}
          />
        </label>
      </div>
      <div className={styles['input-container']}>
        <label className={styles.label} htmlFor="translation">
          Translation :
          <input
            {...register('translation')}
            className={styles.input}
            type="text"
            id="translation"
            autoComplete="off"
            value={secondInput}
            onChange={(e) => setSecondInput(e.target.value)}
          />
        </label>
      </div>
      <button
        className="w-32 bg-card-background text-center h-8 rounded-sm font-semibold mt-8 active:scale-105 transition-all"
        type="submit"
      >
        {type === 'create' ? 'Create' : 'Save changes'}
      </button>
    </form>
  )
}

export default Form
