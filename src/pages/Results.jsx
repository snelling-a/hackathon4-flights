import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

//pages
import Flight from '../components/Flight';

//bootstrap
import Spinner from 'react-bootstrap/Spinner';
import { Col, Container, Row } from 'react-bootstrap';

function Results() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  function getData() {
    try {
      axios
        .get(
          `https://api.skypicker.com/flights?fly_from=PR&fly_to=VCL&partner=picky`,
        )
        .then((response) => {
          console.log(response);
          setData(response.data.data);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return null;
  }
  const rows = data.reduce(function (rows, key, index) {
    return (
      (index % 4 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);
  console.log(rows);

  return (
    <div className='results'>
      {loading ? (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : (
        <Container>
          {rows.map((row, i) => (
            <Row key={i}>
              {row.map((col, index) => (
                <Col key={col.index}>
                  <Flight flight={col.flight} />
                </Col>
              ))}
            </Row>
          ))}
          {/* <Row>
            {data.map((flight, index) => (
              <Col>
                <Flight key={index} flight={flight} />
              </Col>
            ))}
          </Row> */}
        </Container>
      )}
    </div>
  );
}

export default Results;
