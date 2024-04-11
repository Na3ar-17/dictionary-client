import { FC } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '../shadcn/ui/popover'
import styles from './PopoverComponent.module.scss'
interface IProps {
  children: React.ReactNode
}

const PopoverComponent: FC<IProps> = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className={styles.content}>
        <div className={styles.notification}>
          <p className={styles.title}>Time to repet</p>
          <p className={styles.location}>First Week,Folder 1</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverComponent
