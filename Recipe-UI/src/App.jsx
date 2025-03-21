 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Recipe from './NavLinks/Recipe';
import HomePage from './HomePage';
import ChickenPage from './Components/ChickenPage'
import ShoapImage from './Shoap/ShoapImage';
import Form from './NavLinks/Form'
import FastPage from './FastFood/FastPage';
import LoginForm from './LoginItem/LoginForm'
import SignUp from './LoginItem/SignUp'
import Account from './Shoap/Account';
import PaymentMethod from './Shoap/PaymentMethod';
import History from './Shoap/History';
import Error from './Error';

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chicken" element={<ChickenPage />} />
          <Route path="/:meal" element={<Recipe/>}/>
          <Route path ="/form" element={<Form/>}/>
          <Route path="/fastfood" element={<FastPage/>}/>
         
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/shop" element ={<ShoapImage/>}/>
          <Route path="/account" element ={<Account/>}/>
          <Route path="/paymentmethod" element ={<PaymentMethod/>}/>
          <Route path="/history" element ={<History/>}/>
         <Route path ="/*" element = {<Error/>}/>
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;
