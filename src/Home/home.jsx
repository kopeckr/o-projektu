import React from 'react';
import './style.css';

const Home = () => {
  return (
    <>
      <section className="home">
      <h1 className="home__title">
        Vítejte na stránce věnované závěrečnému projektu Digitální Akademie Web jaro 2021. Akademii pořáda nezísková organizace Czechitas, která podporuje mimo jiné ženy v IT.
      </h1>
      <img src="./img/Czechitas_logo.png" className="home__logo" alt="logo Czechitas" />
      </section>
    </>
  );
};

export default Home;
