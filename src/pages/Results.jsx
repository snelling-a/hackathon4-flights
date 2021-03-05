<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReactReact, useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

function Results(props) {
  console.log(props);
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//pages
import Flight from "../components/Flight";

//bootstrap
import Spinner from "react-bootstrap/Spinner";

function Results() {
>>>>>>> 97ef25c5d1036555c8fdb42f26111443e88849d9
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  function getData() {
    try {
      axios
        .get(
<<<<<<< HEAD
          `https://api.skypicker.com/flights?fly_from=JFK&return_from=13/12/2020&return_to=24/12/2020&max_fly_duration=16&flight_type=return&adults=2&children=3&fly_to=MCO&date_from=13/12/2020&date_to=24/12/2020&nights_in_dst_from=1&nights_in_dst_to=21&infants=0&selected_cabins=M&mix_with_cabins=&adult_hold_bag=1,0&adult_hand_bag=1,1&child_hold_bag=2,1,0&child_hand_bag=1,1,0&fly_days=0&fly_days_type=departure&ret_fly_days_type=departure&ret_fly_days=2&one_for_city=0&only_working_days=0&only_weekends=0&one_per_date=0&direct_flights=0&locale=en&partner=picky`,
        )
        .then((response) => {
          console.log(response);
          setData(response);
=======
          `https://api.skypicker.com/flights?fly_from=PR&fly_to=VCL&partner=picky`
        )
        .then((response) => {
          console.log(response);
          setData(response.data.data);
>>>>>>> 97ef25c5d1036555c8fdb42f26111443e88849d9
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }
<<<<<<< HEAD

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='results'>
      {loading ? (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : (
        'ok'
      )}
=======

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="results">

      {loading ? (

        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>

      ) : (

        data.map((flight, index) => (
        <Flight key={index} flight={flight} />
        ))
    
      )}

>>>>>>> 97ef25c5d1036555c8fdb42f26111443e88849d9
    </div>
  );
}

export default Results;
