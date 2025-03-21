import React, { useState, useContext } from 'react';
import { BioContext } from './index';
import axios from 'axios';

export const Home = () => {
    const { count, setCount, number, setNumber, squareNumber, language, toggleLanguage, imageData, setImageData } = useContext(BioContext);
    const { isLoggedIn, Login, Logout } = useContext(BioContext); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showLoginMessage, setShowLoginMessage] = useState(false);

    const handleLogin = () => {
        if (name && email) {
            Login(name, email);
            setShowLoginMessage(true); 
        }
    };


    return (
        <div>
            <p>Count: {count}</p>
            <p>Number: {number}</p>
            <h1>Square: {squareNumber}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <button onClick={() => setNumber(number + 1)}>Increase Number</button>

            <h2>{isLoggedIn ? 'Welcome, User!' : 'Please Log In'}</h2>
            {isLoggedIn ? (
                <button onClick={Logout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}

            {showLoginMessage && <h2>Your Page Login</h2>}

            <h4>{language === 'हिन्दी' ? 'हिन्दी' : 'English'}</h4>
            <button onClick={toggleLanguage}>
                {language === 'हिन्दी' ? 'Switch to English' : 'स्विच करें हिन्दी में'}
            </button>
            <p>{language === 'हिन्दी' ? 'यह एक हिंदी डेमो पैराग्राफ है।' : 'This is an English demo paragraph.'}</p>

            <div>
                <h2>User Dashboard</h2>
                <input
                    type="text"
                    placeholder='Enter user Name'
                    className='p-2 m-2'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Enter Email'
                    className='p-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>

             
        </div>
    );
};
