import React from 'react';
import { getLatestReleased } from '../../services/TmApi';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MovieCard from '../cards/MovieCard';

const Latest = () => {
  const { latest } = useLocation();
  const { data, error, isError, isLoading } = useQuery('latest', () =>
    getLatestReleased(latest)
  );

  return (
    <>
      <Container>
        <Row>
          {isLoading && <p>Movies are loading... </p>}
          {isError && <p>An error occured: {error}</p>}
          {data &&
              data?.results.map((movie, i) => (
                <Col xs={12} sm={4} md={3} lg={2} className='mb-4' key={movie.id}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

export default Latest;
