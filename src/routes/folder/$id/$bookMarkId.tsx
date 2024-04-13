import { createFileRoute } from '@tanstack/react-router'
import Folder from '../../../components/display/Folder/Folder'

export const Route = createFileRoute('/folder/$id/$bookMarkId')({
  component: () => (
    <Folder
      id={Route.useParams().id}
      bookMarkId={Route.useParams().bookMarkId}
    />
  ),
})
