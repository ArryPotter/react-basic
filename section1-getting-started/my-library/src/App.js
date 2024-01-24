import logo from './logo.svg';
import './styles.css';
import { useState } from "react";
import "./styles.css";
import React  from 'react';


const content = [
    [
      "Dracula",
      "Ghost",
      "The Haunting of Hill House",
    ],
    [
      "Harry potter",
      "Chicka Chicka Boom Boom",
      "Goodnight Moon"
    ],
    [
      "A brief history of time",
      "The Selfish Gene",
      "The Elegant Universe"
    ]
  ];

export default function App() {

  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header> 
        <div>
          <h1>Arry Potter Library</h1>
          <p>Welcome</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Horor Book
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Kids Book
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Science Book
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
