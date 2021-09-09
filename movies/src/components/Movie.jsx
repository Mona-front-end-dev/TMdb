import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Movie = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Movie Title</Card.Title>
          <Button variant='primary'>More info</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Movie;
