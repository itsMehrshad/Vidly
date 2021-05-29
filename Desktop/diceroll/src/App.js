import React, { Component } from 'react';
import RollDice from './RollDice';
import './RollDice.css';
import './Dice.css';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <RollDice />
      </div>
    );
  }
}

export default App;
