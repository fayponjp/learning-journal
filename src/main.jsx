import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Blog from './components/blog/Blog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App/>} />
          <Route path='about' element={<About />}/>
          <Route path='journal/:id' element={<Blog />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
