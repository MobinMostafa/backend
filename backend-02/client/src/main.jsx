import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import NoPage from './pages/NoPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "*",
        element: <NoPage/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
