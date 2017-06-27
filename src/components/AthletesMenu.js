'use strict';

import React from 'react';
import { Link } from 'react-router';

const AthletesMenu = (props) => (
  <nav className="athletes-menu">
    {props.athletes.map(menuAthlete => (
      <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
        {menuAthlete.name}
      </Link>
    ))}
  </nav>
);

export default AthletesMenu;
