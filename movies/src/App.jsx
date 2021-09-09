import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './pages/partials/Navigation';
import HomePage from './pages/HomePage';

import './App.scss';

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      
    </>
  );
}

export default App;
