import React from 'react';
import { getGenres } from '../services/TmApi';
import { useQuery } from 'react-query';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Genre from '../components/Genre';

const Genres = () => {
  const { data, error, isError, isLoading } = useQuery('genres', () =>
    getGenres()
  );

  return (
    <>
      <Container>
        <Row className='m-2'>
          <Col md={4}>
            {isLoading && <p>Movies are laoding... </p>}
            {isError && <p>An error occured: {error}</p>}
            {data &&
              data?.genres.map((genre, i) => (
                <Link
                  key={genre.id}
                  className='genre-link'
                  to={`/genres/${genre.id}`}
                >
                  {genre.name}
                </Link>
              ))}
          </Col>
          <Col md={8}>
            <Genre />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Genres;
