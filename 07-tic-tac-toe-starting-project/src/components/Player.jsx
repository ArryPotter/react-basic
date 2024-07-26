import { useState } from "react";


export default function Player({initialName, symbol, isActive}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick(){
        setIsEditing(isEditing => !isEditing);
        console.log(isEditing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    if(isEditing){
        editablePlayerName = <input type='text' required value={playerName} onChange={handleChange}/>
    }
    
    return (
        <li className={isActive? 'active': undefined}>
            <span className="player">{editablePlayerName}</span>     
            <span className="player-symbol">{symbol}</span>        
        <button onClick={handleEditClick}>{isEditing ? 'save': 'edit'}</button>
        </li>
    );
}