import React, { useEffect, useState } from 'react';
import { Jumbotron, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

const Index = () => {
  return (
    <div className='home'>
      <Jumbotron>
        <h1>This is not Kiwi</h1>
        <p>
          We're (probably) better. <br />
          Search for your next perfect getaway!
        </p>
        <SearchForm />
      </Jumbotron>
    </div>
  );
};

export default Index;
