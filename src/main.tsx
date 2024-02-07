import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/display/Layouts/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
)
