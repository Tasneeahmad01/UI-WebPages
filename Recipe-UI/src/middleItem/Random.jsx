import { useEffect,  useState } from "react";

export default function Random() {
    const [currentIndex, setCurrentIndex] = useState(0);
 

    const arrayImage = [
       "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
"https://images.pexels.com/photos/1639564/pexels-photo-1639564.jpeg",
"https://img.freepik.com/free-photo/meat-burger-wooden-board-french-fries-side-view_141793-2388.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid",
"https://img.freepik.com/free-photo/side-view-grilled-beef-meat-with-vegetables-served-with-french-fries-sauces-plate_140725-11965.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid",
"https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
"https://img.freepik.com/premium-photo/creamy-cashew-paneer-curry-ornate-bowl_1282444-165701.jpg?w=996",
"https://img.freepik.com/free-photo/chicken-wings-plate-appetizing-potatoes-chicken-wings-onion-herbs_140725-73718.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid",
"https://images.pexels.com/photos/1600714/pexels-photo-1600714.jpeg",
"https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
"https://img.freepik.com/free-photo/club-sandwich-with-cheese-cucumber-tomato-smoked-meat-salami-served-with-french-fries_2829-19825.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid",
"https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid",
"https://img.freepik.com/premium-photo/grilled-fish-fresh-vegetables-white-plate-png-vector-image_985894-78.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid",
"https://images.pexels.com/photos/1345191/pexels-photo-1345191.jpeg",
"https://img.freepik.com/free-photo/club-sandwich-with-cheese-cucumber-tomato-smoked-meat-salami-served-with-french-fries_2829-19834.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid"


    ];

    // ऑटोमेटिक स्लाइडिंग के लिए useEffect
    useEffect(() => {
        const nextSlide = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImage.length);
        }, 3000);

        return () => clearInterval(nextSlide);  
    }, []);  // ✅ 

    // Previous slide function
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? arrayImage.length - 1 : prevIndex - 1
        );
    };

    // Next slide function
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImage.length);
    };

   
    return (
        <div style={{ textAlign: "center" }}>
            <h2 className="mt-5">Choose Slider Food</h2>
            <img
                src={arrayImage[currentIndex]}
                alt="slider"
                style={{ width: "700px", height: "350px", objectFit: "cover" }}
            />
            <div style={{ display: "flex", justifyContent:"space-around", gap: "20px", margin: "20px 0" }}>
                <button onClick={prevSlide} style={{ padding: "10px 20px", background: "red", color: "white", border: "2px solid orange", cursor: "pointer" }}>Previous</button>
                <button onClick={nextSlide} style={{ padding: "10px 20px", background: "red", color: "white", border: "2px solid orange", cursor: "pointer" }}>Next</button>
            </div>

            
        </div>
    );
}
