import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Dictionary from './pages/DictionaryPage/Dictionary'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dictionary" element={<Dictionary />} />
      </Routes>
    </>
  )
}

export default App
