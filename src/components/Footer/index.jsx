import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <>
    <footer>
        <div className="github__box">
          <a href="https://github.com/kopeckr" title="Kristýna">
            <img src="./img/github-icon.svg" className="github__icon" alt="github icon" />
          </a>
          <p className="github__user">Kristýna</p>
        </div>
        
        <div className="github__box">
          <a href="https://github.com/martam90" title="Marta">
            <img src="./img/github-icon.svg" className="github__icon" alt="github icon" />
          </a>
          <p className="github__user">Marta</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
