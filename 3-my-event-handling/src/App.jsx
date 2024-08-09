import { useState } from "react";
import ScoreSection from './ScoreSection'
import Button from './PlayerCard';
import PlayerCard from "./PlayerCard";



function App() { 
  const [isClicked, setIsClicked] = useState(true);
  const [gameSet, setGameSet] = useState(1);
    
  const [player1, setPlayer1] = useState({
    score: [0,0,0],
    serve: false,
    nationality: 'Dutch',
    name: 'Max Verstappen',
    displayedName : 'Max Verstappen'
  });

  const [player2, setPlayer2] = useState({
    score: [0,0,0],
    serve: false,
    nationality: 'England',
    name: 'Lewis Hamilton',
    displayedName : 'Lewis Hamilton'
  });

  const gameSetIncrement = (score) => {   
    score === 3 ? setGameSet(gameSet+1) : ''; 
  }

  function handleClick(event){   
    setIsClicked(!isClicked);
    const scoreIndex = gameSet - 1;
    
    if(event.target.id === 'player1') {
       setPlayer1(prev => {        
        const currScore = prev.score;        
        currScore[scoreIndex] = currScore[scoreIndex] + 1   
        gameSetIncrement(currScore[scoreIndex])         
        return {...prev,  score: currScore }
      })
    }
    
    if(event.target.id === 'player2') {
      setPlayer2(prev => {        
        const currScore = prev.score;        
        currScore[scoreIndex] = currScore[scoreIndex] + 1   
        gameSetIncrement(currScore[scoreIndex])      
        return {...prev,  score: currScore }
     })
   }   
  }
  function handleMouseOver(){
      setPlayer1(prev => {     
       return {...prev,  displayedName: prev.nationality }
     })

     setPlayer2(prev => {        
       return {...prev,  displayedName: prev.nationality }
    })   
  }

  function handleMouseOut(){
    

    setPlayer1(prev => {     
      return {...prev,  displayedName: prev.name }
    })

    setPlayer2(prev => {        
      return {...prev,  displayedName: prev.name }
   })   
  }

  return (
    <div>
      <header>
        <h1>Badminton Score Board</h1>        
      </header>
        <ScoreSection displayedName={player1.displayedName} color='player1-text-color' scoreList={player1.score} gameSet={gameSet} onMouseOver={() => handleMouseOver()} onMouseOut = {() => handleMouseOut()}/>
        <ScoreSection displayedName={player2.displayedName} color='player2-text-color' scoreList={player2.score} gameSet={gameSet} onMouseOver={() => handleMouseOver()} onMouseOut = {() => handleMouseOut()}/>
      <div class='player-section' >
        <PlayerCard name='Max Verstappen' color='player1-bg-color' id='player1' onClick={(event) => handleClick(event)}/>
        <PlayerCard name='Lewis Hamilton' color='player2-bg-color' id='player2' onClick={(event) => handleClick(event)}/>
      </div>
    </div>
  );
}

export default App;
