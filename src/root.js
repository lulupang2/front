import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from './main';

function Root({ store }) {
  return (
    <HashRouter>
      <Route path="/" component={Main} />
    </HashRouter>
  );
}

export default Root;
