import React from 'react';
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getPersonsDetailsByPersonId } from '../services/TmApi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import PersonsMovieCard from '../components/cards/PersonsMovieCard'


const PersonDetailsPage = () => {
  const { id } = useParams();
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  const { data, error, isError, isLoading } = useQuery(
    ['personDetails', id],
    () => getPersonsDetailsByPersonId(id)
  );

  return (
    <>
      {isLoading && <p>Details are loading... </p>}
      {isError && <p>An error occured: {error}</p>}
      {data && (
        <Card className='shadow'>
          <Row className='mt-5 mx-3'>
            <Col>
              <Image src={tumbnailPreImgUrl + data.profile_path} rounded />
              <Card.Body className='text-dark'>
                <Card.Text className='text-dark'>
                  {(data.birthday?<><strong>Born on </strong>{data.birthday}</>:(''))}
                </Card.Text>
                <Card.Text className='text-dark'>
                {(data.birthday?<><strong>Born att</strong> {data.place_of_birth}</>:(''))}
                </Card.Text>
                <Card.Text className='text-dark'>
                 {(data.known_for_department?<><strong> Known for </strong>{data.known_for_department}</>:(''))}
                </Card.Text>
              </Card.Body>
            </Col>
            <Col sm={8}>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{(data.biography?<>{data.biography}</>:(`There is no biography available for ${data.name}`))}</Card.Text>
              <PersonsMovieCard />
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
};

export default PersonDetailsPage;
