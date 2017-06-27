'use strict';

import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => (
  <div className="app-container">
    <header>
      <Link to="/">
        <img className="logo" src="/img/logo-judo-heroes.png"/>
      </Link>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
      <p>
        This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
      </p>
    </footer>
  </div>
);

export default Layout;
