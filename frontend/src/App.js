import './App.css';
import Homepage from './Components/Homepage.js'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import SampleDashboard from './Components/Homepage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/" component={Homepage}/>
      </Switch>
    </Router>
  );
}
