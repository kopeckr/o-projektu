import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';

import Home from './Home/home';
import AboutUs from './AboutUs/aboutus';
import AboutProject from './AboutProject/aboutproject';

const App = () => (
  // <>
  //   <Header />
  // </>

  <Router>
    <div>
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
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/aboutproject">
            <AboutProject />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
