import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import NavBar from './components/NavBar';
import Results from './pages/Results';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import Test from './pages/Test';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/search/results/:from/:to' component={Results} />
          <Route path='/booking/:id' component={Booking} />
          <Route path='/test' component={Test} />

          {/* <Route path='/results' component={Results} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
