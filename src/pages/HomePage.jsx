import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1 className='my-5'>Welcome to TMdb!</h1>
          <h3 className='my-5'>
            Here you can find your instrested movie easily by different
            categories.
          </h3>
          <h5 className='my-5'>
            Click on related tab to see the list of movies.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
