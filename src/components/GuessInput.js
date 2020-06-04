import React from 'react';
import '../index.scss';

export default class GuessInput extends React.Component {
  handleKeyPress(e) {
    console.log(e.key);
    console.log();
  }

  render() {
    return (
      <input class="guessInput" placeholder="Make a guess" onKeyPress={(e) => this.handleKeyPress(e)}/>
    )
  }
}
