import React, { useEffect, useRef, useState } from 'react';
import India from "./ImageList/India.jsx";

function Add() {
    const [image, setImage] = useState('');  
    const [remove, setRemove] = useState(false); 
    const [count, setCount] = useState(0);
    const prevCount = useRef(0);

    useEffect(() => {
        prevCount.current = count; 
    }, [count]);

    const fetchImage = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            setImage(data[0].url);
        } catch (error) {
            console.error("Error fetching image", error);
        }
    };

    useEffect(() => {
        fetchImage(); // Fetch image on initial render
    }, []);

    const handleRemove = () => {
        setRemove(true);
    };
   
     
    return (
        <div className="main-div">
            <div className="container">
                <h2>Random Cat Images</h2>
                <img 
                    src={image} 
                    alt="Cat" 
                    style={{ width: '300px', borderRadius: '8px' }} 
                />
                <button onClick={fetchImage}>Show Another</button>
            </div>

            {!remove ? (
                <div className="d-block">
                    <h2>Title: culpa odio esse rerum omnis laboriosam voluptate repudiandae</h2>
                    <button onClick={handleRemove}>Remove</button>
                </div>
            ) : (
                <div className="deleted-message">
                    <h1 style={{ fontFamily: "monospace" }}>
                        Your Text is Deleted 😂🤣
                    </h1>
                    <video 
                        src="https://v.ftcdn.net/01/07/20/05/700_F_107200559_M1LPjxUhdwBGYYjkvzfhQj7sV6giiOgv_ST.mp4"  
                        width={450} 
                        controls
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
             <h2>Current Count: {count}</h2>
            <h3>Previous Count: {prevCount.current}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
<India/>
        </div>
    );
}

export default Add;
