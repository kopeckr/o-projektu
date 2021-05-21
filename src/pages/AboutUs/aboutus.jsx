import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <section className="about__us">
          <h1 className="about__us--title">Kristýna</h1>
          <div className="about__us--box">
          <img
            className="about__us--photo"
            src="./img/hp.jpg"
            alt="Kristýna"
            loading="lazy"
          />
          </div>
          <div className="about__us--text">
            <p>
              <strong>Něco o mě:</strong> V Hradci Králové jsem vystudovala
              angličtinu a francouzštinu.
            </p>

            <p>
              <strong>Pracuju:</strong> Od dokončení školy pracuji v cestovním
              ruchu.
            </p>

            <p>
              <strong>Ráda:</strong> Tak trochu jsem posedlá vším, co se týká
              Spojeného království - dějiny, kultura, seriály, filmy… Dále ráda
              cestuji (nejen do UK), fotím, čtu, baví mě fitness jumping.
            </p>
          </div>
        </section>

        <section className="about__us">
          <h1 className="about__us--title">Marta</h1>
          <div className="about__us--box">
            <img
              className="about__us--photo"
              src="./img/marta.jpg"
              alt="Marta"
              loading="lazy"
            />
          </div>
          
          <div className="about__us--text">
          <p>
            <strong>Něco o mě:</strong> Vystudovala jsem dějiny pro učitele.{' '}
          </p>

          <p>
            <strong>Pracuju/pracovala jsem:</strong> Pracovala jsem 5 let v
            cestovním ruchu.
          </p>

          <p>
            <strong>Ráda:</strong> Mám ráda cizí jazyky, kruhové tréninky,
            cestování. Píšu blog o cestách na motorce.
          </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
