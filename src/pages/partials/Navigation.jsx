import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Container>
        <Link to='/' className='navbar-brand'>
          <span>TMdb</span>
        </Link>
        <Link to='/genre' className='navbar-brand'>
          <Navbar.Collapse id='navbar-dark-example'>
            <Nav>
              <NavDropdown
                id='nav-dropdown-dark-example'
                title='Genres'
                menuVariant='dark'
              >
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Adventure
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Animation</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Comedy</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Crime</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Documentary</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Drama</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Family</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Fantasy</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>History</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Horror</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Music</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Mystery</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Romance</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Science Fiction</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>TV Movie</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Thriller</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>War</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Western</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;
