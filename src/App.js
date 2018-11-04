import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Details from './Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/:id(\d+)" component={Details} />
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
