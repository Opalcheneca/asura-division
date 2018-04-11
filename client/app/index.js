import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';
import Rules from './components/About/rules';
import About from './components/About/about';
import AsuraSystem from './components/About/asura-system';
import Newsletter from './components/Library/newsletter';
import Library from './components/Library/library';
import Profile from './components/Profile/profile';
import Favors from './components/Library/favors';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/rules" component={Rules}/>
        <Route path="/about-asura" component={About}/>
        <Route path="/asura-system" component={AsuraSystem}/>
        <Route path="/newsletter" component={Newsletter}/>
        <Route path="/library" component={Library}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/favors" component={Favors}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
