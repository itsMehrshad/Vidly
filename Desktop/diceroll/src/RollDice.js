import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css';
import './Dice.css';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  state = {
    dice1: 'one',
    dice2: 'two',
    isRolling: false,
  };
  handleRolling = () => {
    const DiceNum1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const DiceNum2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({ dice1: DiceNum1, dice2: DiceNum2, isRolling: true });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 200);
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Dice face={this.state.dice1} shaking={this.state.isRolling} />
          <Dice face={this.state.dice2} shaking={this.state.isRolling} />
        </div>
        <button onClick={this.handleRolling}  disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll the Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
