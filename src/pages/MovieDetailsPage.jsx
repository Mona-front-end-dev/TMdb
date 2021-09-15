import React from 'react';
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getDetailsByMovieId } from '../services/TmApi';

const MoviDetailsPage = () => {
  const { id } = useParams();
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  const { data, error, isError, isLoading } = useQuery(
    ['movieDetails', id],
    () => getDetailsByMovieId(id)
  );

  return (
    <>
      {isLoading && <p>Details are loading... </p>}
      {isError && <p>An error occured: {error}</p>}
      {data && (
        <Card>
          <Card.Body className='text-light d-flex p-5 bg-black'>
            <img
              src={tumbnailPreImgUrl + data.poster_path}
              className='img-fluid'
            />
            <Card.Text className='p-5'>
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
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MoviDetailsPage;
