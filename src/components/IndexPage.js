'use strict';

import React from 'react';

import AthletePreview from './AthletePreview';
import athletes from './../data/athletes.js';

const IndexPage = () => (
  <div className="home">
    <div className="athletes-selector">
      {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
    </div>
  </div>
);

export default IndexPage;
