import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Category from './components/categories/Category.jsx'
import Cart from './components/cart/Cart.jsx'
import PageNotFound from './components/404/404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "category/:name",
    element: <Category />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
