import React from 'react';
import { Form } from 'react-bootstrap';

const SearchForm = () => {
  return (
    <Form>
      <Form.Group controlId='exampleForm.ControlInput1'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='name@example.com' />
      </Form.Group>
      <Form.Group controlId='exampleForm.ControlSelect1'>
        <Form.Label>Example select</Form.Label>
        <Form.Control as='select' /* onChange={handleChange} */>
          <option value='VAL'>Valencia</option>
          <option value='BCN'>Barcelona</option>
          <option value='MAD'>Madrid</option>
          <option value='MXP'>Milano</option>
          <option value='ATH'>Athens</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='exampleForm.ControlSelect2'>
        <Form.Label>Example multiple select</Form.Label>
        <Form.Control as='select' multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
