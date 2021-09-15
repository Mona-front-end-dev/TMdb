import React from 'react';
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getDetailsByMovieId } from '../services/TmApi';

const MoviDetailsPage = () => {
  const { id } = useParams();
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  const { data, error, isError, isLoading } = useQuery(
    ['movieDetails', id],
    () => getDetailsByMovieId(id)
  );

  return (
    <>
      {isLoading && <p>Details are loading... </p>}
      {isError && <p>An error occured: {error}</p>}
      {data && (
        <Card>
          <Card.Title className='text-center text-dark'>
            <img
              src={tumbnailPreImgUrl + data.poster_path}
              className='img-fluid'
            />
            <p className='text-dark'>Name:{data?.original_title}</p>
            <p className='text-dark'>
              Genres:
              {data?.genres.map((genre, i) => (
                <span>
                  {genre.name}
                  {', '}
                </span>
              ))}
            </p>
            <p className='text-dark'>Language:{data?.original_language}</p>
            <p className='text-dark'>
              Production country:
              {data?.production_countries.map((country, i) => (
                <p>{country.name}</p>
              ))}
            </p>
            <p className='text-dark'>Status:{data?.status}</p>
          </Card.Title>
        </Card>
      )}
    </>
  );
};

export default MoviDetailsPage;
