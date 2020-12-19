import './App.css';
import Homepage from './Components/Homepage.js'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import SigninDisplay from './Components/SigninDisplay';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import SampleDashboard from './Components/SampleDashboard';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/signin" component={SigninDisplay}/>
        <Route path="/" component={SampleDashboard}/>
      </Switch>
    </Router>
  );
}
