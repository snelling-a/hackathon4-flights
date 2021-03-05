import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/search/results/:to/:from/:dep/:ret' component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
