import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReaxctReact, useEffect, useState } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'

function Results() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    function getData() {
        try{
            axios
            .get(`https://api.skypicker.com/flights?fly_from=JFK&return_from=13/12/2020&return_to=24/12/2020&max_fly_duration=16&flight_type=return&adults=2&children=3&fly_to=MCO&date_from=13/12/2020&date_to=24/12/2020&nights_in_dst_from=1&nights_in_dst_to=21&infants=0&selected_cabins=M&mix_with_cabins=&adult_hold_bag=1,0&adult_hand_bag=1,1&child_hold_bag=2,1,0&child_hand_bag=1,1,0&fly_days=0&fly_days_type=departure&ret_fly_days_type=departure&ret_fly_days=2&one_for_city=0&only_working_days=0&only_weekends=0&one_per_date=0&direct_flights=0&locale=en&partner=picky`)
            .then(response => {
                console.log(response);
                setData(response);
                setLoading(false);
            });
            
    
        } catch(e) {
            console.log(e)
        }
    }
    
    useEffect(()=>{
        getData();
    }, [])

  return (
    <div className='results'>
        {loading ? <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner> : "ok"}






    </div>
  );
}

export default Results;
