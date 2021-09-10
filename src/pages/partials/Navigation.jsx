import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Genres from '../../components/Genres';


const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Container>
        <Link to='/' className='navbar-brand'>
          <span>TMdb</span>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;
