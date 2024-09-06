import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faInfoCircle, faCode,  faFileAlt, faEnvelope  } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-5">
                            <Nav.Link as={Link} to="/"> 
                                <span>About</span> 
                                <FontAwesomeIcon icon={faInfoCircle} 
                                className="mx-2" /> 
                            </Nav.Link> 
                            <Nav.Link as={Link} to="/projects"> 
                                <span>Projects</span> 
                                <FontAwesomeIcon icon={faCode} 
                                className="mx-2" /> 
                            </Nav.Link>
                            <Nav.Link as={Link} to="/resume"> 
                                <span>Resume</span> 
                                <FontAwesomeIcon icon={faFileAlt} 
                                className="mx-2" /> 
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact"> 
                                <span>Contact</span> 
                                <FontAwesomeIcon icon={faEnvelope} 
                                className="mx-2" /> 
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;
