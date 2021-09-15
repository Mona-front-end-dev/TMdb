import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CharacterCard = ({ data }) => {
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      <h2>Charachters:</h2>
      {data?.credits.cast.map((person, i) => (
        <Link variant='dark' className='d-flex' to={`/people/${person.id}`}>
          <Card>
            <Card.Img
              variant='top'
              src={tumbnailPreImgUrl + person.profile_path}
              className='img-fluid'
            />
            <Card.Body className='text-dark border'>
              <Card.Title>{person.name}</Card.Title>
              <Card.Text className='text-dark'>{person.character}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default CharacterCard;
