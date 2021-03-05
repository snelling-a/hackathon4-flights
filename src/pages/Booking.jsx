import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Booking(props) {
  console.log(props);
  return (
    <>
      <h1>flight id: {props.match.params.id}</h1>{' '}
    </>
  );
}

export default Booking;
