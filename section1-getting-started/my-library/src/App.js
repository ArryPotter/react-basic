import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import "./styles.css";


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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
