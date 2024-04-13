import { createFileRoute } from '@tanstack/react-router'
import Folder from '../../../../components/display/Folder/Folder'

export const Route = createFileRoute('/folder/$id/$bookMarkId/rows')({
  component: () => (
    <Folder
      bookMarkId={Route.useParams().bookMarkId}
      id={Route.useParams().id}
    />
  ),
})
