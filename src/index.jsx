import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/aboutus';
import AboutProject from './pages/AboutProject/aboutproject';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => (
  <Router>
    <div>
      <Header />
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
      <Footer />
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
