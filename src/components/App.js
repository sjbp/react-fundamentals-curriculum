import React, { Component } from 'react';
var Home = require('./Home');
var Navbar = require('./Navbar');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
