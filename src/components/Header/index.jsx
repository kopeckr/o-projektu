import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/aboutus">
                O nás
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/aboutproject">
                O projektu
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
