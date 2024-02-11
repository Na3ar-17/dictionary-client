import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import Dictionary from './pages/dictionary-page/Dictionary'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dictionary/:folderId" element={<Dictionary />} />
      </Routes>
    </>
  )
}

export default App
