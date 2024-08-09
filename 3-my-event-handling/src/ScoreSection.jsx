const Score = ({score, gameSetActive})=> { 
    const style = `player-score centered ${gameSetActive ? 'gameset-active' : 'gameset-inactive'}` ;    
    return (
      <div class={style}>
            {score}
      </div>
    )
  }
  
const ScoreSection = ({displayedName, color, scoreList, gameSet, onMouseOver, onMouseOut}) => {
    const sectionStyle = `player1-section ${color}`;
    return (
      <div class={sectionStyle} onMouseOver={onMouseOver} onMouseOut={onMouseOut} name={displayedName}>
          <div class='player-name centered'> 
            {displayedName}
          </div>
           { 
            scoreList.map((data, index) => index === gameSet-1 ? <Score score={data} gameSetActive={true}/> : <Score score={data} gameSetActive={false}/>)
            } 
        </div>
    )
}

export default ScoreSection;