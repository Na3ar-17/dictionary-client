import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import Dictionary from './pages/dictionary-page/Dictionary'
import TestingPage from './pages/testing-page/TestingPage'
import StatisticsPage from './pages/statistics-page/StatisticsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dictionary/:folderId" element={<Dictionary />} />
        <Route path="/testing/:folderId" element={<TestingPage />} />
        <Route path="/statistics/:folderId" element={<StatisticsPage />} />
      </Routes>
    </>
  )
}

export default App
