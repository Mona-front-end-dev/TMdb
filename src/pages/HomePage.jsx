import React from 'react';
import Container from 'react-bootstrap/Container';

const HomePage = () => {
	return (
		<Container>
      <h1 className="text-center my-5">Welcome to TMdb!</h1>
      <h3 className="text-center">Here you can find your instrested movie easily by different categories.<br></br>Click on related tab to see the list of movies.</h3>
		</Container>
	);
};

export default HomePage;
