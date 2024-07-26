import Player from './components/Player.jsx';
import TimerChallege from './components/TimerChallege.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallege title='Easy' targetTime={1}/>
        <TimerChallege title='Medium' targetTime={5}/>
        <TimerChallege title='Getting tough' targetTime={10}/>
        <TimerChallege title='Pros only' targetTime={15}/>
      </div>

    </>
  );
}

export default App;
