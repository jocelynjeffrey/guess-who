import { ADD_GUESSED_CARD } from '../actionTypes';
const initialState = {};

const guessedCards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GUESSED_CARD: {
      return action.payload.guess
    }
    default: {
      return state;
    }

  }
}

export default guessedCards;