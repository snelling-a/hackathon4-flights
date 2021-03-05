import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg='light' variant='light' sticky='bottom'>
      <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#features'>Features</Nav.Link>
        <Nav.Link href='#pricing'>Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
