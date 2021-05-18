import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './Header';

const App = () => (
  <>
    <Header />
  </>
);

render(<App />, document.querySelector('#app'));
