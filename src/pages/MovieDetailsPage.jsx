import React from 'react';
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import PersonCard from '../components/cards/PersonCard';
import { getDetailsAndCharactersByMovieId } from '../services/TmApi';

const MoviDetailsPage = () => {
  const { id } = useParams();
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w1280';

  const { data, error, isError, isLoading } = useQuery(
    ['movieDetails', id],
    () => getDetailsAndCharactersByMovieId(id)
  );

  return (
    <>
      {isLoading && <span>Details are loading... </span>}
      {isError && <spa>An error occured: {error}</spa>}
      {data && (
        <>
          <Card.Body className='text-light row p-5 bg-black'>
            <Col sm={4} md={3}>
              {data?.poster_path ? (
                <img
                  src={tumbnailPreImgUrl + data.poster_path}
                  className='img-fluid d-block m-auto'
                  alt={data?.original_title}
                />
              ) : (
                <img
                  src='/movie.jpeg'
                  className='img-fluid d-block m-auto'
                  alt={data?.original_title}
                />
              )}
            </Col>
            <Col>
              <h4>
                <strong>{data?.original_title}</strong>
              </h4>
              <Card.Text>
                {data?.genres.length ? (
                  <strong>
                    {data?.genres.length > 1 ? 'Genres:' : 'Genre'}
                  </strong>
                ) : null}
                {data?.genres.length
                  ? data.genres.map((genre, i) => (
                      <span key={genre.name}>
                        {' '}
                        {genre.name}
                        {data.genres.length !== i + 1 ? ',' : ''}
                      </span>
                    ))
                  : null}
                <br />
                {data?.original_language ? (
                  <>
                    <strong>Original language: </strong>
                    {data?.original_language}
                  </>
                ) : null}
                <br />
                {data.production_countries.map((country) => (
                  <span key={country.name}>
                    <strong>Produced at: </strong>
                    {country.name}
                  </span>
                ))}
                <br /> <strong>{data?.status} on: </strong>
                {data?.release_date}
                <br />{' '}
                {data?.overview ? (
                  <>
                    <strong>Overview:</strong> {data?.overview}
                  </>
                ) : (
                  <>
                    <strong>Overview:</strong> <span>No data available</span>
                  </>
                )}
                <br />
                <strong>Produced by:</strong>
                {data?.production_companies.length ? (
                  data.production_companies.map((company, i) => (
                    <span key={company.name}>
                      {' '}
                      {company.name}
                      {data.production_companies.length !== i + 1 ? ',' : ''}
                    </span>
                  ))
                ) : (
                  <span> No data is available.</span>
                )}
                <br />
                {data?.genres.length ? (
                  <strong>
                    {data?.genres.length > 1
                      ? 'Available languages:'
                      : 'Available language:'}
                  </strong>
                ) : null}
                {data?.spoken_languages.map((lang, i) => (
                  <span key={i}>
                    {' '}
                    {lang.english_name}
                    {data.spoken_languages.length !== i + 1 ? ',' : ''}
                  </span>
                ))}
              </Card.Text>
            </Col>
          </Card.Body>
          {data?.credits.cast.length ? <PersonCard data={data} /> : null}
        </>
      )}
    </>
  );
};

export default MoviDetailsPage;
