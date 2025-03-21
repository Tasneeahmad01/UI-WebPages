import React, { createContext, useState, useMemo } from "react";
import Example from './Example'
export const BioContext = createContext();

function BioProvider({ children }) {
  // General state
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(2);
  const [language, setLanguage] = useState('English');


  // User state
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLogin: false
  });

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Computed values
  const squareNumber = useMemo(() => number * number, [number]);

  // Auth functions
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  // Language toggle
  const toggleLanguage = () => setLanguage(prev => (prev === "English" ? 'हिन्दी' : 'English'));

  // User functions
  const loginUser = (name, email) => setUser({ name, email, isLogin: true });
  const logoutUser = () => setUser({ name: '', email: '', isLogin: false });

  return (
    <BioContext.Provider value={{
      count, setCount,
      number, setNumber,
      squareNumber,
      isLoggedIn, login, logout,
      language, toggleLanguage,
      user, setUser,
      loginUser, logoutUser,
       
    }}>
      {children}
      <Example/>
    </BioContext.Provider>
   
  );
}

export default BioProvider;
