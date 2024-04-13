import { createFileRoute } from '@tanstack/react-router'
import Testing from '../../../../components/display/Testing/Testing'

export const Route = createFileRoute('/folder/$id/$bookMarkId/testing')({
  component: () => <Testing folderId={Route.useParams().id} />,
})
