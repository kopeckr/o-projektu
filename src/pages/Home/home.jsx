import React from 'react';
import './style.css';

const Home = () => {
  return (
    <>
      <section className="home">
        <h1 className="home__title">
          Vítejte na stránce věnované závěrečnému projektu Digitální Akademie
          Web jaro 2021. Akademii pořádá nezisková organizace Czechitas, která
          pomáhá ženám a dětem poznat svět IT.
        </h1>
        <img
          src="./img/Czechitas_logo.png"
          className="home__logo"
          alt="logo Czechitas"
        />
      </section>
    </>
  );
};

export default Home;
