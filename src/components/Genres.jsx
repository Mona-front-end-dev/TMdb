import React from 'react';
import { getGenres } from '../services/TmApi';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Genres = () => {
  const { genres } = useLocation();
  const { data, error, isError, isLoading } = useQuery('genres' , () =>
  getGenres(genres));


  return (
    <>
      <Container >
        
          {isLoading && <p>Movies are laoding... </p>}
          {isError && <p>An error occured: {error}</p>}           
          {data && data?.genres.map((genre, i) => (
            <Container>
                <Row >
                    {genre.name}
                </Row> 
            </Container>             
          ))}
      </Container>
    </>
  );
};

export default Genres;
