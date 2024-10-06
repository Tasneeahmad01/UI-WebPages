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
            <p className='para-2'>{item.Question}</p>
            <button onClick={() => setActiveId(activeId === item.id ? null : item.id)}className="toggle-btn">
              {activeId === item.id ? "Close" : "Show"}
            </button>
            {activeId === item.id && <p className='para-2'>{item.Answer}</p>}
          </li>
        ))}
      </ul>
    </>
  );
}
