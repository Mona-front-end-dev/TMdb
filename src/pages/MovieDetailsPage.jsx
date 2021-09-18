import React from 'react';
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import PersonCard from '../components/cards/PersonCard';
import { getDetailsAndCharactersByMovieId } from '../services/TmApi';
import Alert from 'react-bootstrap/Alert'

const MoviDetailsPage = () => {
  const { id } = useParams();
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  const { data, error, isError, isLoading } = useQuery(
    ['movieDetails', id],
    () => getDetailsAndCharactersByMovieId(id)
  );

  let toBeRenderedGenres = null;
  let genresTitle = null;

  if (data?.genres.length) {
    genresTitle = <strong>                    
      {data?.genres.length > 1 ? 'Genres:' : 'Genre'}
    </strong>

    toBeRenderedGenres = data.genres.map((genre, i) => (
      <span key={i}>
        {' '}
        {genre.name}
        {data.genres.length !== i + 1 ? ',' : ''}
      </span> 
    ))
  }

  return (
    <>
      {isLoading && <span>Details are loading... </span>}
      {isError && <spa>An error occured: {error}</spa>}
      {data && (
        <>
          <Card.Body className='text-light row p-5 bg-black'>
            <Col xs={3}>
              <img
                src={tumbnailPreImgUrl + data.poster_path}
                className='img-fluid'
              />
            </Col>
            <Col>
                <h4>
                  <strong>{data?.original_title}</strong>
                </h4>
              <Card.Text>
                { genresTitle }
                { toBeRenderedGenres } 
                <br />
                  <strong>Original language: </strong>
                  {data?.original_language}
                <br />
                  {data.production_countries.map((country, i) => (
                    <span key={i}>
                      <strong>Produced at </strong>
                      {country.name}
                    </span>
                  ))}
                <br />
                  {' '}
                  <strong>{data?.status} on </strong>
                  {data?.release_date}
                <br />
                  {' '}
                  <strong>Overview:</strong> {data?.overview}
                <br />
                  <strong>Produced by</strong>{' '}
                  {data?.production_companies.map((company, i) => (
                    <span key={i}>
                      {' '}
                      {company.name}
                      {','}
                      <br />
                    </span>
                  ))}
                  <strong>
                    {data?.genres.length > 1
                      ? 'Available languages:'
                      : 'Available language:'}
                  </strong>

                  {data?.spoken_languages.map((lang, i) => (
                    <span key={i}>
                      {' '}
                      {lang.english_name}
                      {','}
                    </span>
                  ))}
              </Card.Text>
            </Col>
          </Card.Body>
          <PersonCard data={data} />
        </>
      )}
    </>
  );
};

export default MoviDetailsPage;
