import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Asura Division</Link>

    <nav>
      <Link to="/newsletter">Newsletter</Link>
      <Link to="/about-asura">About Asura Division</Link>
      <Link to="/asura-system">Asura System</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/favors">Favors</Link>
    </nav>
    <div>
      <div>
        <p>Account</p>
        <Link to="/profile">Profile Page</Link>
      </div>
    </div>

    <hr />
  </header>
);

export default Header;
