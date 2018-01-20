import React, {Component} from 'react';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
// import logo from './logo.svg'; import './App.css';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/> {/* both /roster and /roster/:number begin with /roster */}
          <Route path='/dashboard' component={Dashboard}/>
          {/* <Route path='/schedule' component={Schedule}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
