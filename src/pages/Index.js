import React from 'react';
import { Jumbotron, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Index = () => {
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
              <Form.Control placeholder='From' />
            </Col>
            <Col>
              <Form.Control placeholder='To' />
            </Col>
            <Link to={`/search/results/VAL/PRG/deptdate/retdate`}>
              <Button variant='primary'>Search</Button>
            </Link>
          </Row>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default Index;
