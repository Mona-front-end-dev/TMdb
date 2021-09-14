import React from 'react';
import Card from 'react-bootstrap/Card';

const MoviCard = ({ movie }) => {
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      <Card>
        <Card.Title className='text-center text-dark'>
          <img
            src={tumbnailPreImgUrl + movie.poster_path}
            className='img-fluid'
          />
          <span className='text-dark'>{movie.original_title}</span>
        </Card.Title>
      </Card>
    </>
  );
};

export default MoviCard;
