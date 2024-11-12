import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import { CartProvider } from './context/CartContext'
import CartPage from './pages/CartPage'

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App
