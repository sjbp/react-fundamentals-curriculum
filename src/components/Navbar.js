var React = require('react');
var CityInput = require('./CityInput');

class Header extends React.Component {
  render() {
    return(
      <div className='navbar'>
        <h1>Clever Title</h1>
        <div className='zip-container-row'>
          <CityInput isRowLayout={true} />
        </div>
      </div>
    )
  }
}

module.exports = Header;