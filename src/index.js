import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.scss';
import Game from './components/Game.component';

ReactDOM.render(
  <Provider store={store}>
    <Game />,
    document.getElementById('root')
  </Provider>
);
