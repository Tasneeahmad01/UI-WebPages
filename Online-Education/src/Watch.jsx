import React, { useEffect,useRef, useState } from "react";

function Watch() {
  const timeRef = useRef(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [bgcolor, setBgColor] = useState("#ffffff");
  const [color, setColor] = useState("#32eeff");
  const [isvisible, setIsVisible] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [counting, setCounting] = useState(10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [image, setImage] = useState("");


  const images = [
    "https://plus.unsplash.com/premium_photo-1738049133061-8f5953450af3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1738049131323-4551b77f8daf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1738049131322-7110db75e0fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  };

  const handleChangeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setBgColor(randomColor);
  };

  const RandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setColor(randomColor);
  };

  const isVisibility = () => {
    setIsVisible(!isvisible);
  };

  const handleClick = () => {
    setCounting((prevCounting) => prevCounting - 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    fetchRandomImage();
  }, []);

  // Function to fetch a random image
  const fetchRandomImage = () => {
    fetch("https://api.thedogapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setImage(data[0]?.url);
      })
      .catch((error) => console.log("Error fetching", error));
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Stopwatch */}
      <h1>
        Stopwatch: {minutes} Minute{minutes !== 1 ? "s" : ""} {seconds} Seconds
      </h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>

      <br />
      <br />

      {/* Toggle Text Visibility */}
      <h3>Toggle Text Visibility</h3>
      <button onClick={isVisibility}>Toggle Text</button>
      {isvisible && <h1 style={{ marginTop: "20px" }}>This is the toggled text!</h1>}

      {/* Password Toggle */}
      <br />
      <input
        type={isShow ? "text" : "password"}
        placeholder="Enter the password"
      />
      <button onClick={() => setIsShow(!isShow)} className="btn btn-dark">
        {isShow ? "👁️" : "👁️‍🗨️"}
      </button>

      {/* Click Counter */}
      <h2>Count: {counting}</h2>
      <button onClick={handleClick}>Click me!</button>

      {/* Image Slider */}
      <div className="container" style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={prevSlide}>Previous</button>
        <img
          src={images[currentIndex]}
          alt="slide images"
          style={{ width: "500px", height: "300px", margin: "0 10px" }}
        />
        <button onClick={nextSlide}>Next</button>
      </div>

      {/* Background Color Changer */}
      <div style={{ padding: "20px", backgroundColor: bgcolor, marginTop: "20px" }}>
        <h1>Random Background Color</h1>
        <button onClick={handleChangeColor}>Change Background Color</button>
      </div>

      {/* Text Color Changer */}
      <h1 style={{ color: color, marginTop: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <button onClick={RandomColor}>Change Text Color</button>
      <h1>Random Dog Image</h1>
      {image && <img src={image} alt="Random Dog" width="300" />}
      <button onClick={fetchRandomImage}>Random</button>
    </div>
  );
}

export default Watch;
