import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import AboutUs from './pages/AboutUs';
import BlogDetail from "./pages/BlogDetail";
import Register from "./pages/Register";
import Login from './pages/Login';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pages" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;