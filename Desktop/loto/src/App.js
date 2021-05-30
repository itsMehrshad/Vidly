import React, { Component } from 'react';
import Ball from './Ball';
import Lottery from './Lottery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lottery />
        <Lottery title='Mini Lottery' maxNum={15} numBalls={4} />
        <Lottery title='Tiny Lottery' maxNum={8} numBalls={2} />
      </div>
    );
  }
}

export default App;
