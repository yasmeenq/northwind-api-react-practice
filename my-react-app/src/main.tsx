import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './components/LayoutArea/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
)


//create a layout on your own
