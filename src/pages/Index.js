import React, { useEffect, useState } from 'react';
import { Jumbotron, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Index = () => {
  const [dest, setDest] = useState('');
  const [dept, setDept] = useState('');

  function handleChange(e) {
    setDest(e.target.value);
    console.log(dest);
  }

  return (
    <div className='home'>
      <Jumbotron>
        <h1>This is not Kiwi</h1>
        <p>
          We're (probably) better. <br />
          Search for your next perfect getaway!
        </p>
        <Form>
          <Row>
            <Col>
              <Form.Control as='select' onChange={handleChange}>
                <option>Departure</option>
                <option value=''>Prague</option>
                <option value=''>Berlin</option>
                <option value=''>Warsaw</option>
                <option value=''>New York</option>
                <option value=''>Vienna</option>
              </Form.Control>{' '}
            </Col>
            <Col>
              <Form.Control as='select' onChange={handleChange}>
                <option>Where to?</option>
                <option value='VAL'>Valencia</option>
                <option value='BCN'>Barcelona</option>
                <option value='MAD'>Madrid</option>
                <option value='MXP'>Milano</option>
                <option value='ATH'>Athens</option>
              </Form.Control>
            </Col>
            <Link to={`/search/results/${dest}/PRG/`}>
              <Button variant='primary'>Search</Button>
            </Link>
          </Row>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default Index;
