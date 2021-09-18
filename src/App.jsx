import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './pages/partials/Navigation';
import HomePage from './pages/HomePage';
import Latest from './components/Movies/Latest';
import Tabs from './components/Tabs';
import './App.scss';
import TopListed from './components/Movies/TopListed';
import Genres from './components/Genres';
import Popular from './components/Movies/Popular';
import MovieDetailsPage from './pages/MovieDetailsPage';
import PersonDetailsPage from './pages/PersonDetailsPage';
import Container from 'react-bootstrap/Container';
import FetchingSpinner from './components/Fetchingspinner';

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Tabs />
        <FetchingSpinner />
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
          <Route path='/genres/:genreId'>
            <Genres />
          </Route>
          <Route path='/genres'>
            <Redirect to="/genres/28" /> // to kkep genre tab activated when selecting different genres
          </Route>
          <Route path='/movies/:id'>
            <MovieDetailsPage />
          </Route>
          <Route path='/people/:id'>
            <PersonDetailsPage />
          </Route>
          <Route path='/popular'>
            <Popular />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
