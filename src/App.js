import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Results from './pages/Results';


function App() {
  return (
    <div className='App'>
      <h1>hackathon #4</h1>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/search/results/:to/:from/:dep/:ret' component={Index} />
          <Route path='/results' component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
