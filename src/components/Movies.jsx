import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getLatestReleased } from '../services/TmApi';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


const Movies = () => {
  const { latest } = useLocation();
  const tumbnailPreImgUrl = "https://image.tmdb.org/t/p/w200";

  const { data, error, isError, isLoading } = useQuery('latest' , () =>
  getLatestReleased(latest));


  return (
    <>
      <Container >
        <Row>
        {isLoading && <p>Movies are laoding... </p>}
        {isError && <p>An error occured: {error}</p>}
        {data && data?.results.map((movie, i) => (
          <Card style={{ width: '14rem' }} className="bg-dark m-2" key={i}>
          <Card.Title className='text-center my-2 text-dark'>
            <img src={tumbnailPreImgUrl + movie.poster_path} />
        <span className="text-white">{movie.original_title}</span>
          </Card.Title>
          
        </Card>
        ))}

</Row>
      </Container>
    </>
  );
};

export default Movies;
