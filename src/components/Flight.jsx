function Flight(props) {


    return (
      <div>
          <p>FLIGHT DETAIL</p>
          <ul>
              <li>Price: E{props.flight.price}</li>
              <li>Takeoff: {props.flight.dTime}</li>
              <li>Landing: {props.flight.dTime}</li>
              <li>Duration: {props.flight.duration.total}</li>
              <li>Availability: {props.flight.availability.seats}</li>
             
            
       

              
            </ul>
        






          
          
      </div>
    )
  
  }
  
  export default Flight;