'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';

/**
 * NOTE: The match-all route '*' in
 *    <Route path="*" component={NotFoundPage}/>
 * maps every other path to the NotFoundPage component.
 * This route must be defined as the last one.
 */

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="athlete/:id" component={AthletePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
