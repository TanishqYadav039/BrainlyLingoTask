import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Page2 from './Page2/Page2.jsx'
import { TabProvider } from './Context/TabContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TabProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/page2/:id" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </TabProvider>
  </StrictMode>,
)
