import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/home-logo.png'

import Home from '../Home/Home';

const Header = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" className='fs-3 fw-bold' bg="secondary" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/"> <img height={85} src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#home">Home</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="about">Blog</Nav.Link>
                            {/* <span>{user?.displayName && user.displayName}</span> */}
                            {

                                //  <button className='btn btn-link text-white text-decoration-none fs-3'  >Sign Out</button>

                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse >
                </Container >
            </Navbar >
            <Home></Home>



        </div>
    );
};

export default Header;