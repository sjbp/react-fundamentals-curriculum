var React = require('react');
var CityInput = require('./CityInput');

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1 className='header'>Enter a City and a State</h1>
        <CityInput />
      </div>
    )
  }
}

module.exports = Home;