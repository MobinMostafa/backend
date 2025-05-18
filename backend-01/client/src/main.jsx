import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './pages/Layout.jsx'
import CreateUser from './pages/CreateUser.jsx'
import App from './App.jsx'
import Edit from './pages/Edit.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <App/>
      },
      {
        path: "create",
        element: <CreateUser/>
      },
      {
        path: "update/:id",
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`),
        element: <Edit/>
      }
    ]
  },
  
]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
