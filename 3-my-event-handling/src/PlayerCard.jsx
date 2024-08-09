import profilPictIcon from './assets/profilPictIcon.jpg'

const PlayerCard = ({name, onClick, color, id}) => {

    const buttonClass = `player-button ${color}`
    
    return (
        <div class='player-card-container'>
            <div class='player-img' onClick={onClick}>
                 <img src={profilPictIcon} class='player-img' />
            </div>
            <button class={buttonClass} onClick={onClick} id={id} > 
                {name}
            </button>            
        </div>
    );
}

export default PlayerCard;