import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getPersonsMoviesByPersonId } from '../../services/TmApi';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PersonsMovieCard = () => {
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(
    ['personsMovie', id],
    () => getPersonsMoviesByPersonId(id)
  );

  return (
    <>
      <Row>
        {isLoading && <span>Movies are laoding... </span>}
        {isError && <span>An error occured: {error}</span>}
        {data &&
          data?.credits.cast.map((pmovie, i) => (
            <Col md={3}>
              <Link variant='dark' to={`/movies/${pmovie.id}`} className='text-decoration-none'>
                <Card className='shadow mt-4'>
                    <img
                      src={tumbnailPreImgUrl + pmovie.poster_path}
                      className='img-fluid'
                    />
                  <Card.Text className='text-dark text-center py-3'>
                    {pmovie.original_title}
                  </Card.Text>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default PersonsMovieCard;
