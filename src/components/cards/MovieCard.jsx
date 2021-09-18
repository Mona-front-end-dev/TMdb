import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MoviCard = ({ movie }) => {
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      <Link
        variant='dark'
        className='text-decoration-none'
        to={`/movies/${movie.id}`}
      >
        <Card className='shadow'>
          {
            movie.poster_path ?
              <img
              src={tumbnailPreImgUrl + movie.poster_path}
              className='img-fluid'
              />
              :
              <img
              src="/movie.jpeg"
              className='img-fluid'
              />
          }

          <div className='text-dark my-3 movie-card-title d-flex align-items-center justify-content-center'>
            <h5 className='text-center text-dark'>{movie.original_title}</h5>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default MoviCard;
