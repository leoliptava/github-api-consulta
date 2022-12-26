import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RepoPage from './pages/RepositoriesPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/:login/repositories">
          <RepoPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
