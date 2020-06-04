import React from 'react';
import '../index.scss';

import Board from './Board.component';
import GuessInput from './GuessInput';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Board />
        <GuessInput />
      </div>
    )
  }
}