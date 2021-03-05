import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

//componts
import Flight from '../components/Flight';
import { Plane } from '../components/Plane';

//bootstrap
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap';

function Results(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dep, setDep] = useState(props.match.params.from);
  const [dest, setDest] = useState(props.match.params.to);

  // console.log(props.match.params.to);

  function getData($dep, $dest) {
    try {
      axios
        .get(
          `https://api.skypicker.com/flights?fly_from=${dep}&fly_to=${dest}&partner=picky`,
        )
        .then((response) => {
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

  // const rows = data.reduce(function (rows, key, index) {
  //   return (
  //     (index % 4 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
  //     rows
  //   );
  // }, []);

  // console.log(rows);

console.log(data);

  return (
    <div className='results'>
      {loading ? (
        // <Spinner animation='border' role='status'>
        //   <span className='sr-only'>Loading...</span>
        // </Spinner>
        <Plane height={150} width={150} />
      ) : (
        <Container>
          {/* {rows.map((row, i) => (
            <Row key={i}>
              {row.map((col, index) => (
                <Col key={index}>
                  <Flight flight={col.flight} />
                </Col>
              ))}
            </Row>
          ))} */}
          {
            <Row>
              {data.map((flight, index) => (
                <Col key={index}>
                  <Flight flight={flight} />
                </Col>
              ))}
            </Row>
          }
        </Container>
      )}
    </div>
  );
}

export default Results;


        {/* //   {rows.map((row, i) => (
        //     <Row key={i}>
        //       {row.map((col, index) => (
        //         <Col key={index}>
        //           <Flight flight={col.flight} />
        //         </Col>
        //       ))}
        //     </Row>
        //   ))} */}