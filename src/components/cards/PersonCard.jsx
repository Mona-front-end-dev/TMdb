import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PersonCard = ({ data }) => {
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      <h4 className='mt-4'>Characters:</h4>
      <Row>
        {data?.credits.cast.map((person, i) => (
          <Col xs={12} sm={4} md={3} lg={2} key={i}>
            <Link
              variant='dark'
              className='text-decoration-none person-card d-block'
              to={`/people/${person.id}`}
            >
              <Card className='shadow'>
                {person.profile_path ? (
                  <Card.Img
                    variant='top'
                    src={tumbnailPreImgUrl + person.profile_path}
                    className='img-fluid'
                  />
                ) : (
                  <Card.Img
                    variant='top'
                    src='/avatar.png'
                    className='img-fluid'
                  />
                )}
                <Card.Body className='text-dark'>
                  <Card.Title className='person-title'>
                    {person.name}
                  </Card.Title>
                  <Card.Text className='text-dark person-details'>
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

export default PersonCard;
