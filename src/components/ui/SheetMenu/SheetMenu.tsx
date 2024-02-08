import { Dispatch, FC, SetStateAction } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '../../../../@/components/ui/sheet'
import styles from './SheetMenu.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TypeRow } from '../../../types/row.type'

interface IProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  type: 'create' | 'edit'
}

const SheetMenu: FC<IProps> = ({ open, setOpen, type = 'create' }) => {
  const { register, handleSubmit, reset } = useForm<TypeRow>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TypeRow> = async (values) => {
    console.log(values)
  }
  return (
    <>
      <div className={`${styles.overlay} ${open ? styles.active : ''}`}></div>
      <Sheet open={open} onOpenChange={() => setOpen(!open)}>
        <SheetContent side={'top'} className={styles.sheet}>
          <SheetHeader className="text-start">
            <SheetTitle className="text-2xl font-semibold">
              {type === 'create' ? 'Add new row' : 'Edit row'}
            </SheetTitle>
            <SheetDescription className="text-xl">
              {type === 'create'
                ? 'Write word and translation'
                : "Make changes to your row here. Click save when you're done."}
            </SheetDescription>
          </SheetHeader>
          <div className={styles['sheet-body']}>
            {type === 'create' ? (
              <div className={styles.create}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                  <div className={styles['input-container']}>
                    <label className={styles.label} htmlFor="word">
                      Word :
                      <input
                        {...register('word', { required: true })}
                        className={styles.input}
                        type="text"
                        id="word"
                      />
                    </label>
                  </div>
                  <div className={styles['input-container']}>
                    <label className={styles.label} htmlFor="translation">
                      Translation :
                      <input
                        {...register('translation', { required: true })}
                        className={styles.input}
                        type="text"
                        id="translation"
                      />
                    </label>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <button
                        className="w-32 bg-dark-green text-center h-8 rounded-sm font-semibold mt-8 active:scale-105 transition-all"
                        type="submit"
                      >
                        {type === 'create' ? 'Create' : 'Save changes'}
                      </button>
                    </SheetClose>
                  </SheetFooter>
                </form>
              </div>
            ) : (
              <div className={styles.edit}>Edit</div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default SheetMenu
