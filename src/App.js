import React from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import ScoreUpdater from './components/ScoreUpdater';
function App() {
  return (
    <div className="App">
      <Scoreboard />
      <ScoreUpdater />
    </div>
  );
}

export default App;
