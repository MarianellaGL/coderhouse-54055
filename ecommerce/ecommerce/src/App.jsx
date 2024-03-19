import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetailContainer from './components/itemDetailContainer'
import { CartContext, CartProvider } from './context/CartContext';

function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
          />
          <Routes>
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path='/items' element={<ItemDetailContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/" exact element={<ItemListContainer />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
