import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//pages
import Flight from "../components/Flight";

//bootstrap
import Spinner from "react-bootstrap/Spinner";

function Results() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  function getData() {
    try {
      axios
        .get(
          `https://api.skypicker.com/flights?fly_from=PR&fly_to=VCL&partner=picky`
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

    </div>
  );
}

export default Results;
