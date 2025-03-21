import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
   const [ctime, setCTime]=useState();
    const Toast = () => {
        toast("🦄 Login Successfully!", {
            position: "top-center"
        });
    };

    const input = (event) => {
        setInputData(event.target.value);
    };

    const addItem = () => {
        if (inputData.trim()) {
            setItems([...items, inputData]);
            setInputData('');
        }
    };

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, ind) => ind !== index);
        setItems(updatedItems);
    };
    const updateTime = ()=>{
        const time = new Date().toLocaleTimeString();
        setCTime(time);   
    }
    setInterval(updateTime,1000);
 const time = new Date().toLocaleTimeString();
    return (
        <>
            <div className="main-div">
                <h1>{ctime}</h1>
                <h2>Welcome to Signup Page</h2>
                <button className="btn btn-primary" onClick={Toast}>🚀 Login</button>
            </div>
            <ToastContainer />
            <figure>
                <img
                    src="https://img.freepik.com/free-vector/colorful-todo-list-illustration_1308-172724.jpg"
                    alt="Todo App"
                    className="Image"
                />
                <figcaption>Add Your Todo List</figcaption>
            </figure>
            <div className="Add-Todo">
                <input
                    type="text"
                    placeholder="✍🏻 Add Item..."
                    value={inputData}
                    onChange={input}
                />
                <i className="bi bi-plus btn btn-success fs-5" onClick={addItem}></i>

            </div>
            <div className="Add-Item">
                {items.map((ele, ind) => {
                    return (
                        <div className="eachItem d-flex" key={ind}>
                        <h3>{ele}</h3>
                        <i 
                            className="bi bi-trash-fill btn btn-danger" 
                            onClick={() => deleteItem(ind)} 
                            title="Delete Item"
                        >
                        </i>
                    </div>
                    
                         
                    );
                })}
            
            </div>
        </>
    );
};

export default Login;
