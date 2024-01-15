import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Products/:category" element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/success" element={<Success />} />
        </Routes>
        <Routes>
          <Route path="/register"  element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        </Routes>
    </Router>
    
  );
};

export default App;
