import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import NavBar from './components/NavBar';
import Results from './pages/Results';
<<<<<<< HEAD
import Booking from './pages/Booking';
=======
import Footer from './components/Footer';
>>>>>>> 18f7cefc362dd3ecc0facb1e0dbe973109591850

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Index} />
<<<<<<< HEAD
          <Route
            path='/search/results/:from/:to'
            component={Results}
          />
          <Route
            path='/booking/:id'
            component={Booking}
          />
=======
          <Route path='/search/results/:from/:to' component={Results} />
>>>>>>> 18f7cefc362dd3ecc0facb1e0dbe973109591850
          {/* <Route path='/results' component={Results} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
