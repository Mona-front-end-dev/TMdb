import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharacterCard = ({ data }) => {
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      <h4 className='mt-4'>Charachters:</h4>
      <Row>
        {data?.credits.cast.map((person, i) => (
          <Col md={2}>
            <Link
              variant='dark'
              className='text-decoration-none'
              to={`/people/${person.id}`}
            >
              <Card className='shadow'>
                <Card.Img
                  variant='top'
                  src={tumbnailPreImgUrl + person.profile_path}
                  className='img-fluid'
                />
                <Card.Body className='text-dark border'>
                  <Card.Title>{person.name}</Card.Title>
                  <Card.Text className='text-dark'>
                    {person.character}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CharacterCard;
