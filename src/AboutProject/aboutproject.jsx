import React from 'react';
import './style.css';
import './img/zbenice01.jpg';

const AboutProject = () => {
  return (
    <>
      <section className="project">
        <h1>O projektu</h1>

        <p></p>

        <h3>Zámek Zbenice</h3>
        <img className="photo" src="./img/zbenice01.jpg" alt="Zamek Zbenice" />
        <p>
          Zbenice jsou zámek ve stejnojmenné vesnici na jihu okresu Příbram ve
          Středočeském kraji. Jeho předchůdcem byla starší středověká tvrz,
          kterou nechal v roce 1626 Vilém Šléglovský ze Šicendorfu přestavět na
          renesanční zámek, později upravený v barokním slohu. Zámecký areál se
          nachází na severozápadním okraji vesnice a je chráněn jako kulturní
          památka.
        </p>

        <p>
          Současný majitel si zámek koupil před 15 lety a nyní se snaží postupně
          zámek rekonstruovat a vrátit ho do bodoby ze 16. století.
        </p>
      </section>
    </>
  );
};

export default AboutProject;
