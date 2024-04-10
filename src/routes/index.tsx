import { createFileRoute } from '@tanstack/react-router'
import Main from '../components/display/Main/Main'

export const Route = createFileRoute('/')({
  component: () => <Main />,
})
