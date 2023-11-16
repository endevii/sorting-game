import React from 'react';
import './App.css';

import TestDrag from './components/TestDrag';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <TestDrag />
      <div className="main_game">
        <GameBoard boardSize={8} />
      </div>
    </div>
  );
}

export default App;
