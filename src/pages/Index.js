import React from 'react';
import { Jumbotron, Button, Form, Row, Col } from 'react-bootstrap';

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
            <Form.Control placeholder='First name' />
          </Col>
          <Col>
            <Form.Control placeholder='Last name' />
          </Col>
        </Row>
      </Form>
      <p>
        <Button variant='primary'>Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Index;
