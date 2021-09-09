import React from 'react';
import Container from 'react-bootstrap/Container';
import Movie from '../components/Movie'

const HomePage = () => {
  return (
    <Container>
      <h1>Latest Movies</h1>
      <Movie />

      <h1>Popular Movies</h1>
      <Movie />
      <h1>Top rated Movies</h1>
      <Movie />

      
    </Container>
  );
};

export default HomePage;
