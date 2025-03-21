import React, { useState, useEffect, useRef, useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

function Photo() {
  const [album, setAlbum] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [Name, setName] = useState("Tasneem Ahmed");
  const [color, setColor] = useState("#ccd5ae");
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [luckyNameValue, setLuckyNameValue] = useState("");
  const luckyName = useRef(null);
  const [personal, setPerSonal] = useState("");
  const personalName = useRef(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setName((prevName) =>
        prevName === "Tasneem Ahmed" ? "Tasneem Web Developer" : "Tasneem Ahmed"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const imageData = await response.json();
        setAlbum(imageData.slice(0, 5));
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/octocat/followers"
        );
        const followerData = await response.json();
        setData(followerData);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    fetchUserData();
  }, []);

  const delparag = () => {
    setIsDeleted(true);
  };

  const submitLuckyForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    if (name === "") {
      alert("Please fill the data");
    } else {
      setLuckyNameValue(name);
      setShow(true);
    }
  };

  const submitPersonalForm = (e) => {
    e.preventDefault();
    const name = personalName.current.value;
    if (name === "") {
      alert("Please fill up the data");
    } else {
      setPerSonal(name);
      personalName.current.value = "";  
    }
  };

  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: color, color: "#222222", padding: "10px" }}>
      <h2>Photo Component</h2>
      <h3>{Name}</h3>
      <button onClick={generateColor}>Change Background Color</button>

      <div className="container-fluid">
        <div className="row">
          {album.length > 0 ? (
            album.map((photo) => (
              <div key={photo.id} className="col-12 mb-4">
                <div className="userid">Photo ID: {photo.id}</div>
                <div className="title">Title: {photo.title}</div>
                <img src={photo.url} alt={photo.title} className="img-fluid" />
              </div>
            ))
          ) : (
            <p>Loading photos...</p>
          )}
        </div>
      </div>

      {!isDeleted ? (
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <button onClick={delparag}>Delete</button>
        </h6>
      ) : (
        <h2>
          Your Text deleted <span style={{ backgroundColor: "red" }}>😣😣🙄🙄</span>
        </h2>
      )}

      <form onSubmit={submitLuckyForm}>
        <label htmlFor="luckyname">Enter your Lucky Name:</label>
        <input type="text" id="luckyname" ref={luckyName} />
        <button>Submit</button>
      </form>
      <p>{show ? `Your Lucky Name is ${luckyNameValue}` : ""}</p>

      <h3>GitHub Followers</h3>
      {data ? (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "15px",
          }}
        >
          {data.map((follower) => (
            <li key={follower.id} style={{ listStyle: "none" }}>
              {follower.login}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading followers...</p>
      )}

      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>

      <form onSubmit={submitPersonalForm}>
        <label htmlFor="personalname">Enter the Personal Name:</label>
        <input type="text" id="personalname" ref={personalName} />
        <button>FillUp</button>
      </form>
      <h4>{personal && `Your Personal Name is ${personal}`}</h4>
    </div>
  );
}

export default Photo;
