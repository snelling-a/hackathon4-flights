import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <div className='App'>
      <h1>hackathon #4</h1>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/search/results/:to/:from/:dep/:ret' component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
