import React from 'react';
import { render } from 'react-dom';
import './index.html';
import { Episode } from './Episode/index';
import './style.css';

const App = () => (
  <div className="episodes-list">
    <Episode
      nun={127}
      title={'Hledání plyšového Yettiho'}
      guest={'Vojtěch Ryba'}
    />
    <Episode
      num={128}
      title={'Moderní hrachová polévka'}
      guest={'Kamila Štancová'}
    />
  </div>
);

render(<App />, document.querySelector('#app'));
