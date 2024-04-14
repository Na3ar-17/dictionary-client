import { FC } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '../shadcn/ui/popover'
import styles from './PopoverComponent.module.scss'
import { INotification } from '../../../types/notification.types'
interface IProps {
  children: React.ReactNode
  data: INotification[]
}

const PopoverComponent: FC<IProps> = ({ children, data }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className={styles.content}>
        {data.length === 0 ? (
          <div>Empty</div>
        ) : (
          data.map((el) => (
            <div className={styles.notification}>
              <p className={styles.title}>{el.message}</p>
              <p className={styles.location}>{el.location}</p>
            </div>
          ))
        )}
      </PopoverContent>
    </Popover>
  )
}

export default PopoverComponent
