import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '../shadcn/ui/tooltip.tsx'
import { FC } from 'react'
import styles from './TooltipComponent.module.scss'
interface IProps {
  children: React.ReactNode
  text: string
}

const TooltipComponent: FC<IProps> = ({ children, text }) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          style={{ display: `${text === '' ? 'none' : 'block'}` }}
          className={styles.content}
        >
          <p className="bg-bg2 px-2 py-1.5 rounded-md text-base">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipComponent
