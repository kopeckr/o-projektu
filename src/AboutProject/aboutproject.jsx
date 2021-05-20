import React from 'react';
import './style.css';

const AboutProject = () => {
  return (
    <>
      <section className="project">
        <h1 className="project__title">Zámek Zbenice</h1>
        <div className="project__box--photo">
          <img className="project__photo" src="./img/zbenice01.jpg" alt="Zamek Zbenice" loading="lazy" />
        </div>
        <div className="project__info">
          <p className="project__description">
            Zbenice jsou zámek ve stejnojmenné vesnici na jihu okresu Příbram ve
            Středočeském kraji. Jeho předchůdcem byla starší středověká tvrz,
            kterou nechal v roce 1626 Vilém Šléglovský ze Šicendorfu přestavět na
            renesanční zámek, později upravený v barokním slohu. Zámecký areál se
            nachází na severozápadním okraji vesnice a je chráněn jako kulturní
            památka.
          </p>

          <p className="project__description">
            Současný majitel si zámek koupil před 15 lety a nyní se snaží postupně
            zámek rekonstruovat a vrátit ho do doby ze 16. století.
          </p>

          <p className="project__description">Našim cílem je vytvořit moderní webové stránky zámku Zbenice, které budou lákat navštěvníky z celé České republiky.</p>
        </div>
        
      </section>
    </>
  );
};

export default AboutProject;
