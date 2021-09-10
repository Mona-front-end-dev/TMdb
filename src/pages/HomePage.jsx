import React from 'react';
import Container from 'react-bootstrap/Container';
import Latest from '../components/Movies/Latest';
import Popular from '../components/Movies/Popular';
import TopListed from '../components/Movies/TopListed';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const HomePage = () => {
	return (
		<Container>
			<Tabs defaultActiveKey='Latest Movies' transition={false} id='noanim-tab-example' className='mb-3'>
				<Tab eventKey='Latest Movies' title='Latest Movies'>
					<Latest />
				</Tab>
				<Tab eventKey='popular' title='The most popular Movies'>
					<Popular />
				</Tab>
				<Tab eventKey='topListed' title='The Top Listed Movies'>
					<TopListed />
				</Tab>
			</Tabs>
		</Container>
	);
};

export default HomePage;
