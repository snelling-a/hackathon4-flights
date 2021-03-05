import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//components
import Flight from "../components/Flight";
import {Plane} from '../components/Plane';

//bootstrap
import Spinner from "react-bootstrap/Spinner";

function Results(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dep, setDep] = useState(props.match.params.from);
  const [dest, setDest] = useState(props.match.params.to);

  console.log(props.match.params.to);



  function getData($dep, $dest) {
    try {
      axios
        .get(
          `https://api.skypicker.com/flights?fly_from=${dep}&fly_to=${dest}&partner=picky`
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
        // <Spinner animation="border" role="status">
        //   <span className="sr-only">Loading...</span>
        // </Spinner>
        <Plane
		
		height={150}
		width={150}
	/>
      ) : (
        data.map((flight, index) => <Flight key={index} flight={flight} />)
      )}
    </div>
  );
}

export default Results;
