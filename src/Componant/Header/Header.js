import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

import Home from '../Home/Home';

const Header = () => {
    return (

        <div>

            <Navbar collapseOnSelect expand="lg" className='fs-3 fw-bold fixed' bg="secondary" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/home"> <img height={85} src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" href="#services">Home</Nav.Link>
                            <Nav.Link as={Link} to="/topics" href="#home">Topic</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {/* <span>{user?.displayName && user.displayName}</span> */}
                            {

                                //  <button className='btn btn-link text-white text-decoration-none fs-3'  >Sign Out</button>

                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse >
                </Container >
            </Navbar >




        </div >
    );
};

export default Header;