import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './pages/partials/Navigation';
import HomePage from './pages/HomePage';
import Latest from './components/Movies/Latest';
import Tabs from './components/Tabs';
import './App.scss';
import TopListed from './components/Movies/TopListed';
import Genres from './components/Genres';
import Popular from './components/Movies/Popular';
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {
  return (
    <>
      <Navigation />
      <Tabs />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/latest'>
          <Latest />
        </Route>
        <Route path='/top'>
          <TopListed />
        </Route>
        <Route path='/genres/:id'>
          <Genres />
        </Route>
        <Route path='/movies/:id'>
          <MovieDetailsPage />
        </Route>
        <Route path='/popular'>
          <Popular />
        </Route>
      </Switch>
    </>
  );
}

export default App;
