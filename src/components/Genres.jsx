import React from 'react';
import { getGenres } from '../services/TmApi';
import { useQuery } from 'react-query';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Genre from '../components/Genre';

const Genres = () => {
  const { data, error, isError, isLoading } = useQuery('genres', () =>
    getGenres()
  );

  return (
    <>
      <Row className='m-2'>
        <Col md={4}>
          <section className='genres-box'>
            {isLoading && <p>Movies are loading... </p>}
            {isError && <p>An error occured: {error}</p>}
            {data &&
              data?.genres.map((genre, i) => (
                <NavLink
                  key={genre.id}
                  className='genre-link'
                  activeClassName='active-genre'
                  to={`/genres/${genre.id}`}
                >
                  {genre.name}
                </NavLink>
              ))}
          </section>
        </Col>
        <Col md={8}>
          <Genre />
        </Col>
      </Row>
    </>
  );
};

export default Genres;
