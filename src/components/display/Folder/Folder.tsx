import { FC } from 'react'
import styles from './Folder.module.scss'

interface IProps {
  slug?: string
}

const Folder: FC<IProps> = ({ slug }) => {
  return <div>Fodler {slug}</div>
}

export default Folder
