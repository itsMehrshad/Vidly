import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
  state = {};
  render() {
    return (
      <i
        className={`Dice fas fa-dice-${this.props.face} ${
          this.props.shaking ? 'shaking' : ''
        }`}
      />
    );
  }
}

export default Dice;
