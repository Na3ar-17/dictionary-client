import { createFileRoute } from '@tanstack/react-router'
import Folder from '../../components/display/Folder/Folder'

export const Route = createFileRoute('/folder/$slug')({
  component: () => <Folder slug={Route.useParams().slug} bookMarkId="asdasd" />,
})
