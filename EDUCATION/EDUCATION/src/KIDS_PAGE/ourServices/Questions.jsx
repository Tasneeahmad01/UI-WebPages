import React, { useState } from 'react';
import ApiData from './ApiData';
import './ApiData.css'
export default function Questions() {
  const [activeId, setActiveId] = useState(null);

  return (
    <>
      <h1 className='text-center'>The Accordion</h1>
      <ul className='list'>
        {ApiData.map((item) => (
          <li key={item.id} className='list-item'>
            <h6 className='para-2'>{item.Question}</h6>
            <button onClick={() => setActiveId(activeId === item.id ? null : item.id)}className="toggle-btn">
              {activeId === item.id ? "Close" : "Show"}
            </button>
            {activeId === item.id && <h5 className='para-2'>{item.Answer}</h5>}
          </li>
        ))}
      </ul>
    </>
  );
}
