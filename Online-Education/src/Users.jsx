import { useState, useEffect, useReducer } from "react";

function Users() {
  const [filterImage, setFilterImage] = useState(0);
  const [text,setText]=useState("नमस्ते, दुनिया!");

  // images array
  const images = [
    "https://media.istockphoto.com/id/658610224/photo/underground-japan-white-car-parking-garage.jpg?s=612x612&w=is&k=20&c=ypGExh6u1GHbNzkKxUwhZcq3NfWhFZZtBZW3HfhNsBg=",
    "https://media.istockphoto.com/id/578832718/photo/public-garage.jpg?s=612x612&w=is&k=20&c=t9u3kQYEoDHtVc_nV6F1eQvROC0mjCyYqUeyxZEdvI4=",
    "https://img.freepik.com/free-photo/flower-dome-garden-greenhouse-forest-travel_74190-6351.jpg?uid=R183565761&ga=GA1.1.943746532.1708755379&semt=ais_hybrid",
    "https://image.shutterstock.com/image-photo/no-wonder-why-this-best-260nw-1862875321.jpg",
    "https://image.shutterstock.com/image-photo/changi-jewel-singapore-best-airport-260nw-1866385153.jpg",
    "https://img.freepik.com/free-photo/flower-dome-garden-greenhouse-forest-travel_74190-6359.jpg?t=st=1738560223~exp=1738563823~hmac=c29a3518c21362b699f19e70bd1ceb47897fc681bd7985581826e671ac348c87&w=740",
    "https://img.freepik.com/free-photo/flower-dome-garden-greenhouse-forest-travel_74190-6361.jpg?t=st=1738560251~exp=1738563851~hmac=20c7be4f4f25adcc1205d2c8442f8b842d6c6a2fa00c34d3a5d90eb95bac2870&w=740",
    "https://img.freepik.com/premium-photo/flowers-hanging-pots_266732-13695.jpg?uid=R183565761&ga=GA1.1.943746532.1708755379&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/flowers-hanging-pots_266732-13701.jpg?w=740",
    "https://img.freepik.com/free-photo/various-plants-growing-greenhouse_23-2147918642.jpg?t=st=1738560333~exp=1738563933~hmac=ef8910f9b24dda5e96ddaad10d619e6ccafc7b45d554be8e63595329ef72b813&w=740",
    "https://img.freepik.com/free-photo/arrangement-with-market-full-flowers_23-2148447098.jpg?t=st=1738560355~exp=1738563955~hmac=bb1a57d670e7a250781c684936c2d3156c4ec2d92de43e26d70f329698042ae1&w=360",
    "https://img.freepik.com/free-photo/various-cactus-flower-plants-greenhouse_23-2147918635.jpg?t=st=1738560371~exp=1738563971~hmac=116e629bfc7e611da3b4da28c2af4f428fdf6b22ab7de68319c9e494f4c62add&w=740",
    "https://img.freepik.com/free-photo/female-gardener-standing-near-plants-growing-greenhouse_23-2147918583.jpg?t=st=1738560384~exp=1738563984~hmac=ab148310f3412895b662adb7a14d9fc54c10d5b94569c77fb168af2f467bb82a&w=740",
    "https://img.freepik.com/premium-photo/flowers-hanging-pots_266732-13701.jpg?w=740",
    "https://img.freepik.com/free-photo/suburban-housing-garden_53876-30332.jpg?t=st=1738560461~exp=1738564061~hmac=8eba1123900421d60826fa28e5fae35197f69a98ca89ec40533ec401c0f048ea&w=740 ",
    "https://img.freepik.com/premium-photo/architectural-building-with-large-vintage-balcony-arch-with-winding-wisteria_278455-593.jpg?w=740",
    "https://img.freepik.com/premium-photo/alley-botanical-garden_266732-13685.jpg?w=740",
    "https://img.freepik.com/free-photo/two-adorable-ladies-posing-with-bunches-pink-chrysanthemums-beautiful-blooming-green-house-with-glass-roof_158595-7044.jpg?t=st=1738560512~exp=1738564112~hmac=e39888db2db19a04ba91e49fc530ea06635ccbc8e5abe2dae4de43ba4d0adfa0&w=360"
  ];

  // Effect for auto-slideshow
  useEffect(() => {
    const nextSlide = setInterval(() => {
      setFilterImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(nextSlide);
  }, []);

  // Previous slide handler
  const preSlide = () => {
    setFilterImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Next slide handler
  const nextSlide = () => {
    setFilterImage((prevIndex) => (prevIndex + 1) % images.length);
  };
  const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="INCREMENT"){
      return state +1;
    }
    if(action.type==="DECREMENT"){
      return state -1;
    }
  };
 const [count,dispatch]=useReducer(reducer,0);
  return (
    <div className="d-block text-center">
      <img src={images[filterImage]} alt="Random images" style={{ width: "700px", height: "430px" ,objectFit:"cover", transition:"opacity 3s ease-in-ease"}} />
      <div >
        <i className="fa-solid fa-chevron-left fs-1 mt-3" onClick={preSlide} style={{ cursor: "pointer"}}></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fa-solid fa-chevron-right fs-1" onClick={nextSlide} style={{ cursor: "pointer" }}></i>
      </div>
       <h1>{count}</h1>
       <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
       <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
       <h1>{text}</h1>
       <button onClick={() => setText("आपका दिन शुभ हो!")}>बदलें</button>
    </div>
  );
}

export default Users;






 