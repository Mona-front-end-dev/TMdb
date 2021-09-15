import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CharacterCard = ({ data }) => {
  const tumbnailPreImgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      <h2>Charachters:</h2>
      {data?.credits.cast.map((actor, i) => (
        <Link
          variant='dark'
          className='d-flex'
          to={`/credits/character/${actor.id}`}
        >
          <Card>
            <Card.Img
              variant='top'
              src={tumbnailPreImgUrl + actor.profile_path}
              className='img-fluid'
            />
            <Card.Body className='text-dark border'>
              <Card.Title>{actor.name}</Card.Title>
              <Card.Text className='text-dark'>{actor.character}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default CharacterCard;
