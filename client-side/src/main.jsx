import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App'
import MainLayout from './components/layouts/MainLayout'
import Home from './components/Home'
import UpdateCoffee from './components/UpdateCoffee'
import AddCoffee from './components/AddCoffee'
import CoffeeDetails from './components/CoffeeDetails'
import ErrorPage from './components/ErrorPage'
import Signup from './components/Signup'
import Signin from './components/Signin'
import { AuthContext } from './Context/AuthContext'
import AuthProvider from './Context/AuthProvider'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "addCoffee",
        Component: AddCoffee
      },
      {
        path: "coffees/:id",
        Component: CoffeeDetails,
      },
      {
        path: "/error",
        Component: ErrorPage
      },
      {
        path: "updateCoffee/:id",
        Component: UpdateCoffee
      },
      {
        path: "signup",
        Component: Signup
      },
      {
        path: "signin",
        Component: Signin
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
