
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Hero from './Hero';
import Cards from './Cards';
import AboutUs from './AboutUs';
import ChooseUs from './ChooseUs'; 
import Testimonials from './Testimonials';
import FeeForm from './FeeForm';
import Footer from './Footer';
import Home from './Component/Home';
import About from './Component/About';
import Choose from './Component/Choose';
import Testimonial from './Component/Testimonial';
import Service from './Component/Service';
import Contact from './Component/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Cards />
            <AboutUs />
            <ChooseUs />
            <Testimonials />
            <FeeForm/>
          </>} />
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/choose-us" element={<Choose />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

