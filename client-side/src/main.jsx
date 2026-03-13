import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App'
import MainLayout from './components/layouts/MainLayout'
import Home from './components/Home'
import UpdateCoffee from './components/UpdateCoffee'
import AddCoffee from './components/AddCoffee'

const router = createBrowserRouter([
  { path: '/', 
    Component:MainLayout,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path:"addCoffee",
        Component: AddCoffee
      },
      {
        path:"updateCoffee",
        Component: UpdateCoffee
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
