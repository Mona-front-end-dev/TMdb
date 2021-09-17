import React from 'react';
import { getTopListed } from '../../services/TmApi';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from '../cards/MovieCard';

const TopListed = () => {
  const { topListed } = useLocation();
  const { data, error, isError, isLoading } = useQuery('topListed', () =>
    getTopListed(topListed)
  );

  return (
    <>
      <Container>
        <Row>
          {isLoading &&<span>Movies are laoding... </span>}
          {isError && <span>An error occured: {error}</span>}
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

export default TopListed;
