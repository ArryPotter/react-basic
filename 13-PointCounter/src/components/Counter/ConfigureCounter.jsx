
import { useState } from "react";
import { log } from '../../log.js';

export default function ConfigureCounter({onSet}){
    log('<ConfigureCounter />', 1)
    const [enteredNumber, setEnteredNumber] = useState(0);

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
      }
    
    function handleSetClick(newCount) {
        onSet(enteredNumber);
        setEnteredNumber(newCount);       
     }

    return <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
}