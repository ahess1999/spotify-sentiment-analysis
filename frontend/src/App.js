import './App.css';
import Homepage from './Components/Homepage.js'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage}/>
      </Switch>
    </Router>
  );
}
