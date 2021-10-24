import React from 'react';
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getPersonsDetailsByPersonId } from '../services/TmApi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import MoviCard from '../components/cards/MovieCard';

const PersonDetailsPage = () => {
  const { id } = useParams();
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w300';

  const { data, error, isError, isLoading } = useQuery(
    ['personDetails', id],
    () => getPersonsDetailsByPersonId(id)
  );

  return (
    <>
      {isLoading && <p>Details are loading... </p>}
      {isError && <p>An error occured: {error}</p>}
      {data && (
        <Row className='mt-5 the-person rounded py-5'>
          <Col md={4}>
            {data.profile_path ? (
              <Image
                src={tumbnailPreImgUrl + data.profile_path}
                rounded
                className='d-block m-auto'
              />
            ) : (
              <Image src='/avatar.png' rounded className='d-block m-auto' />
            )}
            <Card.Body className='text-dark text-center'>
              <Card.Text className='text-dark'>
                {data.birthday ? (
                  <>
                    <strong>Born on </strong>
                    {data.birthday}
                  </>
                ) : (
                  ''
                )}
              </Card.Text>
              <Card.Text className='text-dark'>
                {data.birthday ? (
                  <>
                    <strong>Born at </strong> {data.place_of_birth}
                  </>
                ) : (
                  ''
                )}
              </Card.Text>
              <Card.Text className='text-dark'>
                {data.known_for_department ? (
                  <>
                    <strong> Known for </strong>
                    {data.known_for_department}
                  </>
                ) : (
                  ''
                )}
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md={8}>
            <section className='person-details'>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.biography ? (
                  <>{data.biography}</>
                ) : (
                  `There is no biography available for ${data.name}`
                )}
              </Card.Text>
            </section>
            <Row>
              {data?.credits.cast.map((movie, i) => (
                <Col sm={6} lg={3} xl={2} className='mb-3'>
                  <MoviCard className movie={movie} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default PersonDetailsPage;
