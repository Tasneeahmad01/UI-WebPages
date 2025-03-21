import React, { useEffect, useState } from 'react';
import './App.css';
import Api from './Api';
import Photo from './Photo';
import Login from './Login';
import Add from './Add';
import Trend from './Trend';
import Blank from './Blank';
import BioProvider from './ContextApi';
import {Home} from './ContextApi/Home'


// import axios from "axios";
function App() {
  const [myname, setMyName] = useState("Thapa technical");
  const [buttonColor, setButtonColor] = useState("initial");
  const [count, setCount] = useState(0);
  const [bioData, setBioData] = useState([
    { id: 0, myName: "Tasneem Ahmed", age: 19 },
    { id: 1, myName: "Thapa Bhai", age: 21 },
    { id: 2, myName: "Vinod Technologies", age: 24 }
  ]);

  const [myObject, setMyObject] = useState({
    myName: "Vinod Technical",
    myAge: 26,
    degree: "MCS"
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const [chatCount, setChatCount] = useState(0);
  const [windowwidth, setWindowWidth] = useState(window.innerWidth);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        const imageData = await response.json();
        // setAlbum(imageData.slice(0, 5));

        setData(imageData.slice(1,10)); // Fetch and store the data, but no rendering of images.
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchUserData();
  }, []);

  const actualWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  }, []);

  const changeName = () => {
    if (myname === "Thapa technical") {
      setMyName("Vinod Technologies");
      setButtonColor("#cef476");
    } else {
      setMyName("Thapa technical");
      setButtonColor("initial");
    }
  };

  const increaseNum = () => {
    setCount(count + 1);
  };

  const clearArray = () => {
    setBioData([]);
  };

  const changeObject = () => {
    if (myObject.myName === "Vinod Technical" && myObject.myAge === 26) {
      setMyObject({
        ...myObject,
        myName: "Frontend Developer in Tasneem Ahmed",
        myAge: 30
      });
    } else {
      setMyObject({
        ...myObject,
        myName: "Vinod Technical",
        myAge: 26,
        degree: "MCS"
      });
    }
  };

  const removeText = (id) => {
    setBioData(bioData.filter((item) => item.id !== id));
    alert(id);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email, password };
    setAllEntry([...allEntry, newEntry]);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (chatCount >= 1) {
      document.title = `Chatings🤡(${chatCount})`;
    } else {
      document.title = `Chatings🤡🔴🧧(${chatCount})`;
    }
  }, [chatCount]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{myname}</h1>
      <h3>Count: {count}</h3>
      <button 
        onClick={changeName} 
        style={{ backgroundColor: buttonColor }}
      >
        Change Name
      </button>
      <button onClick={increaseNum}>Increase Count</button>

      {/* Display bioData array */}
      {bioData.map((currElem) => (
        <h1 key={currElem.id}>
          Name: {currElem.myName} & Age: {currElem.age} 
          <button onClick={() => removeText(currElem.id)}>Remove</button>
        </h1>
      ))}
      <button onClick={clearArray}>Clear bioData</button>

      {/* Display and update myObject */}
      <h1 style={{ color: "#ed4365" }}>Name: {myObject.myName} & Age: {myObject.myAge}</h1>
      <button onClick={changeObject}>Update</button>
      <p>The actual size of the window is:</p>
      <h1>{windowwidth}</h1>

      {/* Form for email and password */}
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off" 
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            autoComplete="off"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {/* Display all entries */}
      <div>
        {allEntry.map((currElem, index) => (
          <div className="showDataStyles" key={index}>
            <h2>{currElem.email}</h2>
            <h2>{currElem.password}</h2>
          </div>
        ))}
      </div>

      <h1>{chatCount}</h1>
      <button onClick={() => setChatCount(chatCount + 1)}>Click😂</button>

      <Api/>
      <Photo/>
      <Login/>
     <Add/>
    <Trend/>
    <Blank/>

    <BioProvider>
      <Home/>
   
    </BioProvider>
    </div>
  );
}

export default App;
