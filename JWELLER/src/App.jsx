import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jwellery from './Jwellery';  
import Navbar from './Navbar';
import Product from './Header/Product'
import Gallery from './Header/Gallery';
import AboutUs from './Header/AboutUs'; 
import ContactUs from './Header/ContactUs'; 
import Footer from './Footer'
import Login from './Header/Login'
import LogOut from './Header/LogOut'
import Add from './Header/Add'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Jwellery />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/add" element={<Add/>} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
