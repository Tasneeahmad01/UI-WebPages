import React, { useState } from 'react';
import './Chicke.css';

const Productitm = () => {
    const [showAll, setShowAll] = useState(false);
    
    const Chickenimage = [
        {
            img: "https://static.ffx.io/images/$zoom_0.09210725765521909%2C$multiply_0.3492%2C$ratio_1.5%2C$width_756%2C$x_217%2C$y_202/t_crop_custom/q_86%2Cf_auto/f43dbf3bb894855c6cefab9d464123114fc1f778",
            heading: "Five chicken burgers that taste better than takeaway",
            caption: "Spread your wings with some plucky new riffs on the classic chicken burger."
        },
        {
            img: "https://static.ffx.io/images/$zoom_0.09164611204013379%2C$multiply_0.3492%2C$ratio_1.5%2C$width_756%2C$x_101%2C$y_199/t_crop_custom/q_86%2Cf_auto/fa1dc7eb8c1381e7922bc69d9d97e415e16b70c1",
            heading: "Roast chicken isn’t just for weekends. This one’s ready in under 30 minutes",
            caption: "A tasty stuffing keeps the meat moist and tender as it bakes in a rich tomato sauce. Dinner sorted."
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT2VW-2Bb7N-QsE5iM33ydGP3jbZo0TUD6Q&s",
            heading: "Spicy grilled chicken skewers",
            caption: "Enjoy perfectly grilled chicken with a spicy kick, ideal for BBQ lovers."
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZhCjXORWbxS4AvuRPyCDPyzMF-rNFeDNMg&s",
            heading: "Crispy fried chicken strips",
            caption: "Golden and crunchy, these chicken strips make the perfect snack or side dish."
        },
        {
            img: "https://therecipecritic.com/wp-content/uploads/2021/08/honeygarlicwings.jpg",
            heading: "Honey garlic chicken wings",
            caption: "Sweet and savory chicken wings that are perfect for game nights."
        },
        {
            img: "https://hips.hearstapps.com/hmg-prod/images/pull-apart-buffalo-chicken-sliders-recipe-2-646bda5e14d3c.jpg?crop=0.6665427278924212xw:1xh;center,top&resize=1200:*",
            heading: "Buffalo chicken sliders",
            caption: "Mini spicy chicken burgers, perfect for parties and gatherings."
        },
        {
            img: "https://static.ffx.io/images/$zoom_0.0925240169054799%2C$multiply_0.9841%2C$ratio_1.5%2C$width_756%2C$x_231%2C$y_173/t_crop_custom/q_86%2Cf_auto/018497e11bdbf922c6149606a4d46a388b125f9f",
            heading: "Chicken teriyaki skewers with soba noodles and ginger-citrus dressing",
            caption: "Get dinner on the table in under an hour with minimal clean-up and maximum juicy goodness."
        },
        {
            img: "https://static.ffx.io/images/$zoom_0.21366308135131043%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_8%2C$y_477/t_crop_custom/q_86%2Cf_auto/b01bdccbd81c787ef54b0a5f028eb530ab3017c6",
            heading: "‘Hainanese chicken rice’ greens bowl",
            caption: "This ginger and sesame salad dressing contains nostalgic flavours of my childhood in Singapore."
        }
    ];
    const displayedImages = showAll ? Chickenimage : Chickenimage.slice(0, 6);

    return (
        <div className="Main-container">
            <h1 className="Title">Chicken</h1>
            {displayedImages.map((item, index) => (
                <div key={index} className="Card-container">
                    <img src={item.img} alt={item.heading} className="Card-image" />
                    <div className="Card-content">
                        <h2 className="Card-title">{item.heading}</h2>
                        <p className="Card-caption">{item.caption}</p>
                    </div>
                </div>
            ))}
            <button 
                className="btn btn-danger mt-3 text-center justify-content-center p-2 fs-5" 
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Show Less" : "Show All"}
            </button>
        </div>
    );
};

export default Productitm;
