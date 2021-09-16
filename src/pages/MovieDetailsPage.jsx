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
      {isLoading && <p>Details are loading... </p>}
      {isError && <p>An error occured: {error}</p>}
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
                <p>
                  <strong>{data?.original_title}</strong>
                </p>
                <p>
                  {data?.genres.map((genre, i) => (
                    <>
                      {genre.name}
                      {', '}
                    </>
                  ))}
                </p>
                <p>{data?.original_language}</p>
                <p>
                  {data?.production_countries.map((country, i) => (
                    <>{country.name}</>
                  ))}
                </p>
                <p> {data?.status}</p>
                <p> {data?.overview}</p>
                <p>
                  {data?.production_companies.map((company, i) => (
                    <>
                      {' '}
                      {company.name} company {'('}
                      {company.origin_country}
                      {')'}
                      <br />
                    </>
                  ))}
                </p>
                <p>
                  {data?.spoken_languages.map((lang, i) => (
                    <>
                      {' '}
                      {lang.english_name}
                      {','}
                    </>
                  ))}
                </p>
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
