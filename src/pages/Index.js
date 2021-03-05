import React from 'react';
import { Jumbotron, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder='From' />
          </Col>
          <Col>
            <Form.Control placeholder='To' />
          </Col>
          <Col>
            <Link to={`/search/results/VAL/PRG/deptdate/retdate`}>
              <Button variant='primary'>Search</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </Jumbotron>
  );
};

export default Index;
