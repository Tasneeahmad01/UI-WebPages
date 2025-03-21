import React, { useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AApp from './AApp';
import Watch from './Watch';
import Users from './Users'

function Blank() {
  const [addDiv, setAddDiv] = useState([]);
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);
  const [filterItem, setFilterItem] = useState("");

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Guava"
  ];

  // Filter items based on user input
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filterItem.toLowerCase())
  );

  // Function to add multiple divs with unique IDs
  const AddmltplDiv = () => {
    setAddDiv((prev) => [...prev, { id: prev.length, text: '' }]);
  };

  // Function to handle changes in text areas
  const handleChangeInput = (id, value) => {
    setAddDiv((prev) =>
      prev.map((div) => (div.id === id ? { ...div, text: value } : div))
    );
  };

  // Start timer
  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Stop timer
  const stopTimer = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  };

  // Reset timer
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  // Handle form submission
  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === '' ? alert('Please Fill the Data') : setShow(true);
  };
    // USER PROFILE METHOD
    const userProfile={name:"Tarun mavi",email:"tarun4532@gmail.com",userImage:'https://img.freepik.com/free-photo/front-view-male-engineer-sitting-his-working-place-writing-notes-document-plan-business-corporate-property-builder-contractor-job-agenda_140725-155263.jpg?t=st=1738306379~exp=1738309979~hmac=804fd8c7dddb5d164fb5ceeaf7cb4c2bfa48b35e9e191a2b2ce3fedfce1ea316&w=740 ',
    }

  return (
    <div className="container">
      {/* Map through addDiv and render textareas */}
      {addDiv.map((event) => (
        <div key={event.id}>
          <textarea
            value={event.text}
            onChange={(e) => handleChangeInput(event.id, e.target.value)}
            style={{
              marginTop: '10px',
              height: '250px',
              width: '230px',
              display: 'block',
            }}
           
           
          />
         
        </div>
      ))}

      {/* Add button to create new text areas */}
      <i
        className="fa-solid fa-plus"
        onClick={AddmltplDiv}
        style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }}
      >
      </i>
      
      {/* Render the AApp component */}
      <AApp />
      <Watch />
      <Users/>
      {/* Stopwatch */}
      <h1>Stopwatch: {time} Seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <br />
      <button onClick={resetTimer}>Reset</button>
      <br />
      <br />

      {/* Lucky Name Form */}
      <form onSubmit={submitForm}>
        <label htmlFor="luckyName">Enter Your Lucky Name:</label>
        <input type="text" id="luckyName" ref={luckyName} />
        <button type="submit">Submit</button>
      </form>

      {/* Conditional Rendering with Ternary Operator */}
      <h3>{show ? `Your Current Name: ${luckyName.current.value}` : ''}</h3>

      {/* FILTER LIST ITEMS */}
      <div className="container">
        <h2>Filter List Item</h2>
        <input
          type="text"
          value={filterItem}
          placeholder="Search for an item"
          onChange={(e) => setFilterItem(e.target.value)}
          style={{
            padding: "8px",
            marginBottom: "20px",
            width: "250px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        
        {/* Render the filtered list only when there is input */}
        {filterItem && (
          <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li>No items found</li>
            )}
          </ul>
        )}
      </div>
      <div className="container">
        <img src={userProfile.userImage} alt={`${userProfile.name}'s profile`} />
      </div>
      <div className="container2">
        <h2>{userProfile.name}</h2>
        <h5>{userProfile.email}</h5>
      </div>
    </div>
  );
}

export default Blank;
