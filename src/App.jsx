import { Outlet } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
