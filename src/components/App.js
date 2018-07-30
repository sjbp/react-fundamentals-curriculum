import React, { Component } from 'react';
var Home = require('./Home');
var Details = require('./Details');
var Navbar = require('./Navbar');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/details' component={Details} />
          <Route render={function() {
            return <p>Not Found</p>
          }} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
