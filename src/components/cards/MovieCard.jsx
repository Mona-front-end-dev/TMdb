import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MoviCard = ({ movie }) => {
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      <Link variant='dark' to={`/movies/${movie.id}`}>
        <Card>
          <Card.Title className='text-center text-dark'>
            <img
              src={tumbnailPreImgUrl + movie.poster_path}
              className='img-fluid'
            />
            <span className='text-dark'>{movie.original_title}</span>
          </Card.Title>
        </Card>
      </Link>
    </>
  );
};

export default MoviCard;
