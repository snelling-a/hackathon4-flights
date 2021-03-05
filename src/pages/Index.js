import React, { useEffect, useState } from 'react';
import { Jumbotron, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Index = () => {
  const [dest, setDest] = useState('');
  const [dep, setDep] = useState('');

  function handleChangeDep(e) {
    setDep(e.target.value);
    console.log(dep);
  }

  function handleChangeDest(e) {
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
              <Form.Control as='select' onChange={handleChangeDep}>
                <option>Departure</option>
                <option value='PRG'>Prague</option>
                <option value='BER'>Berlin</option>
                <option value='WAW'>Warsaw</option>
                <option value='JFK'>New York</option>
                <option value='VIE'>Vienna</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control as='select' onChange={handleChangeDest}>
                <option>Where to?</option>
                <option value='VAL'>Valencia</option>
                <option value='BCN'>Barcelona</option>
                <option value='MAD'>Madrid</option>
                <option value='MXP'>Milano</option>
                <option value='ATH'>Athens</option>
              </Form.Control>
            </Col>
            <Link to={`/search/results/${dep}/${dest}`}>
              <Button variant='primary'>Search</Button>
            </Link>
          </Row>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default Index;
