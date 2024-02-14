import TestingPageBody from '../../components/display/testing-page-body/TestingPageBody'
import { useParams } from 'react-router-dom'

const TestingPage = () => {
  const { folderId } = useParams()

  return <TestingPageBody folderId={folderId || ''} />
}

export default TestingPage
