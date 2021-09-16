import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getPersonsMoviesByPersonId } from '../../services/TmApi';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const PersonsMovieCard = () => {
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(
    ['personsMovie', id],
    () => getPersonsMoviesByPersonId(id)
  );

  return (
    <>
      {isLoading && <p>Movies are laoding... </p>}
      {isError && <p>An error occured: {error}</p>}
      {data &&
        data?.credits.cast.map((pmovie, i) => (
          <Link variant='dark' to={`/movies/${pmovie.id}`}>
            <Card className='shadow'>
              <Card.Title className='text-center text-dark'>
                <img
                  src={tumbnailPreImgUrl + pmovie.poster_path}
                  className='img-fluid'
                />
                <span className='text-dark'>{pmovie.original_title}</span>
              </Card.Title>
            </Card>
          </Link>
        ))}
    </>
  );
};

export default PersonsMovieCard;
