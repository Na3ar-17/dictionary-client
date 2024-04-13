import { FC } from 'react'

interface IProps {
  text: string
}

const Error: FC<IProps> = ({ text }) => {
  return <div className="text-2xl text-red text-center font-bold">{text}</div>
}

export default Error
