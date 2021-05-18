import React from 'react';
import './style.css';

const Header = () => {

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="/">Home</a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="/">O projektu</a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="/">O nás</a>
        </li>
      </ul>
  </nav>
  );
}



export default Header;
