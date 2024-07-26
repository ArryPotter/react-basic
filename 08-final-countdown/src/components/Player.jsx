import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  // const [submitted, setSubmitted] = useState(false);
  const playerName = useRef();
  function handleChange(event){
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick(){
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unknown entity' }</h2>
      <p>
        {/* <input type="text" onChange={handleChange} value={enteredPlayerName}/> */}
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
