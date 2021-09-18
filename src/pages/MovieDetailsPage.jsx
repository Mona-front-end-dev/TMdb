import React from 'react';
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import PersonCard from '../components/cards/PersonCard';
import { getDetailsAndCharactersByMovieId } from '../services/TmApi';


const MoviDetailsPage = () => {
  const { id } = useParams();
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

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
            <Col xs={3}>
              <img
                src={tumbnailPreImgUrl + data.poster_path}
                className='img-fluid'
              />
            </Col>
            <Col>
              <Card.Text>
                <h4>
                  <strong>{data?.original_title}</strong>
                </h4>
                <span>
                  <strong>
                    {data?.genres.length > 1 ? 'Genres:' : 'Genre'}
                  </strong>
                  {data?.genres.map((genre, i) => (
                    <>
                    {' '}
                      {genre.name}
                      {', '}
                    </>
                  ))}
                </span><br/>
               <span><stong>Original language: </stong>{data?.original_language}</span>
               <br/>
                <span>
                  {data?.production_countries.map((country, i) => (
                    <>
                      <strong>Produced at </strong>
                      {country.name}
                    </>
                  ))}
                </span>
                <br/>
                <span>
                  {' '}
                  <strong>{data?.status} on </strong>
                  {data?.release_date}
                </span>
                <br/>
                <span>
                  {' '}
                  <strong>Overview:</strong> {data?.overview}
                </span>
                <br/>
                <span>
                <strong>Produced by</strong> {data?.production_companies.map((company, i) => (
                    <>
                      {' '}
                      {company.name}{','}
                      <br />
                    </>
                  ))}
                </span>
                <span>
                  
                    <strong>
                      {data?.genres.length > 1
                        ? 'Available languages:'
                        : 'Available language:'}
                    </strong>
             
                  {data?.spoken_languages.map((lang, i) => (
                    <>
                      {' '}
                      {lang.english_name}
                      {','}
                    </>
                  ))}
                </span>
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
