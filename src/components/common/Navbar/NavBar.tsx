import { FC } from 'react'
import styles from './NavBar.module.scss'
import { Bell } from 'lucide-react'
import PopoverComponent from '../../ui/popover-component/PopoverComponent'
import { Link } from '@tanstack/react-router'
import { useGetNotifications } from '../../../api/hooks/notification'
import Error from '../../ui/error/Error'

const NavBar: FC = () => {
  const { data, isSuccess, isLoading } = useGetNotifications()
  if (!isSuccess) return <Error text="Cant get notification" />
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <p className={styles.title}>
          <Link to="/">Dictionary</Link>
        </p>
        <div className={styles.icons}>
          <PopoverComponent data={data}>
            <Bell className={styles.icon} />
          </PopoverComponent>
          {data.length !== 0 && (
            <span className={styles.notifications}>{data.length}</span>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
