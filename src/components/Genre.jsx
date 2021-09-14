import React from 'react';
import { useQuery } from 'react-query';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { getMoviesByGenreId } from '../services/TmApi';
import Col from 'react-bootstrap/Col';
import MovieCard from './cards/MovieCard';

const Genre = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(['movies', id], () =>
    getMoviesByGenreId(id)
  );

  return (
    <>
      <Row>
        {isLoading && <p>Movies are laoding... </p>}
        {isError && <p>An error occured: {error}</p>}
        {data &&
          data?.results.map((movie, i) => (
            <Col xs={12} md={4} lg={3} className='mb-4' key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Genre;
