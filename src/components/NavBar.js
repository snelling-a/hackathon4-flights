import React from 'react';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar fixed='top' bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Not Kiwi</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          {/* <Nav.Link href='#link'>Link</Nav.Link> */}
          <NavDropdown title='Look at all this' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>
              There's this thing
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              And another thing
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>
              Here's something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>About us </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='primary'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
