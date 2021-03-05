import { Card } from 'react-bootstrap';
import { DateTime } from 'luxon';

function Flight(props) {
  // DateTime.fromMillis(datetimeFromREST * 1000).toFormat('hh:mm');

  return (
    <>
      {/* <div>
        <p>FLIGHT DETAIL</p>
        <ul>
          <li>Price: €{props.flight.price}</li>
          <li>Takeoff: {props.flight.dTime}</li>
          <li>Landing: {props.flight.dTime}</li>
          <li>Duration: {props.flight.duration.total}</li>
          <li>Availability: {props.flight.availability.seats}</li>
        </ul>
      </div> */}
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Price: €{props.flight.price}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
           From: {props.flight.cityFrom} <br/> To: {props.flight.cityTo}<br/>
            Availability: {props.flight.availability.seats}
          </Card.Subtitle>
          <Card.Text>
            <li>
              Takeoff:{' '}
              {DateTime.fromMillis(props.flight.dTime * 1000).toFormat('hh:mm')}
            </li>
            <li>
              Landing:{' '}
              {DateTime.fromMillis(props.flight.aTime * 1000).toFormat('hh:mm')}
            </li>
          </Card.Text>

          <Card.Link href='#'>Book it!</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Flight;
