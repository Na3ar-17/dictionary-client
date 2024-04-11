import { FC } from 'react'
import styles from './NavBar.module.scss'
import { Bell } from 'lucide-react'
import PopoverComponent from '../../ui/popover-component/PopoverComponent'
import { Link } from '@tanstack/react-router'
interface IProps {
  notificationsCount?: number
}

const NavBar: FC<IProps> = ({ notificationsCount }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <p className={styles.title}>
          <Link to="/">Dictionary</Link>
        </p>
        <div className={styles.icons}>
          <PopoverComponent>
            <Bell className={styles.icon} />
          </PopoverComponent>
          {notificationsCount !== 0 && (
            <span className={styles.notifications}>1</span>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
