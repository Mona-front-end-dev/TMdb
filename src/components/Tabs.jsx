import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

const Tabs = () => {
	return (
		<div className='tabs mb-4'>
			<Container>
				<Row>
					<Col>
						<NavLink to='/latest' activeClassName='active' className='router-link'>
							Latest
						</NavLink>
						<NavLink to='/popular' activeClassName='active' className='router-link'>
							Most popular
						</NavLink>
						<NavLink to='/top' activeClassName='active' className='router-link'>
							Top list
						</NavLink>
						<NavLink to='/genres' activeClassName='active' className='router-link'>
							Genres
						</NavLink>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Tabs;
