import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './KIDS_PAGE/Navbar';
import Footer from './KIDS_PAGE/Footer';
import HomePage from './KIDS_PAGE/home/HomePage'; // Corrected the import
import ClassesPage from './KIDS_PAGE/class/ClassPage'
import ContactPage from './KIDS_PAGE/contact/ContactPage';
import ServicePage from './KIDS_PAGE/ourServices/ServicePage';
import RequestPage from './KIDS_PAGE/request/RequestPage';
import NotFound from './KIDS_PAGE/NotFound';
import BookTrial from './KIDS_PAGE/home/BookTrial';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/class" element={<ClassesPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/request" element={<RequestPage />} />
      <Route path="/BookTrial" element={<BookTrial />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);
