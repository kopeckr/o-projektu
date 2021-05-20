import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <section className="about__us">
          <h1 className="about__us--title">Kristýna</h1>
          <p>
            <strong>Něco o mě:</strong> V Hradci Králové jsem vystudovala
            angličtinu a francouzštinu a na Masarykově univerzitě jsem studovala
            obor muzeologie. Jsem ale z Příbrami a nyní bydlím v Praze.
          </p>

          <p>
            <strong>Pracuju/pracovala jsem:</strong> Od dokončení školy pracuji
            v cestovním ruchu.
          </p>

          <p>
            <strong>Ráda:</strong> Tak trochu jsem posedlá vším, co se týká
            Spojeného království - dějiny, kultura, seriály, filmy… Dále ráda
            cestuji (nejen do UK), fotím, čtu, baví mě fitness jumping.
          </p>
        </section>

        <section className="about__us">
          <h1 className="about__us--title">Marta</h1>
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
        </section>
      </div>
    </>
  );
};

export default AboutUs;
