'use strict';

import React from 'react';

const data = {
  'cu': {
    'name': 'Cuba',
    'icon': 'flag-cu.png',
  },
  'fr': {
    'name': 'France',
    'icon': 'flag-fr.png',
  },
  'jp': {
    'name': 'Japan',
    'icon': 'flag-jp.png',
  },
  'nl': {
    'name': 'Netherlands',
    'icon': 'flag-nl.png',
  },
  'uz': {
    'name': 'Uzbekistan',
    'icon': 'flag-uz.png',
  }
};

const Flag = (props) => {
  const name = data[props.code].name;
  const icon = data[props.code].icon;

  return (
    <span className="flag">
      <img className="icon" title={name} src={`img/${icon}`} />
      {props.showName && <span className="name">{name}</span>}
    </span>
  );
}

export default Flag;
