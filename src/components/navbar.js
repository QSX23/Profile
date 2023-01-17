import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

function Navigation(props){
	return(
		<Container>
			<Navbar fixed='top' bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#Home'> Home </Navbar.Brand>
					<Nav>
						<Nav.Link>Projects</Nav.Link>
						<Nav.Link>About Me</Nav.Link>
						<Nav.Link>Contact</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</Container>
		);
}

export default Navigation;