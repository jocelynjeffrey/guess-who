import React from 'react';
import '../index.scss';

import Board from './board.component';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Board />
      </div>
    )
  }
}