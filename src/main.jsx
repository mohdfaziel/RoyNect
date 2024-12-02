import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Product/Product.jsx'
import About from './About Us/About.jsx'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path="" element={< Product/>} />
    <Route path="about" element={< About/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
