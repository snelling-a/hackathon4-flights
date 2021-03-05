import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import NavBar from './components/NavBar';
import Results from './pages/Results';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Index} />
          <Route
            path='/search/results/:to/:from/:dep/:ret'
            component={Results}
          />
          <Route path='/results' component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
