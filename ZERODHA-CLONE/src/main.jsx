import React from 'react';
import './Navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import AboutPage from './Landing_page/about/AboutPage';
import PricingPage from './Landing_page/pricing/PricingPage';
import HomePage from './Landing_page/home/HomePage';
import Signup from './Landing_page/signup/Signup';
import ProductPage from './Landing_page/products/ProductPage';
import SupportPage from './Landing_page/support/SupportPage';
import NotFound from './Landing_page/NotFound';
 
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   
    <Footer />
    
  </Router>
);
