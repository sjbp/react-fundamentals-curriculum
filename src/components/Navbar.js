var React = require('react');

class Header extends React.Component {
  render() {
    return(
      <div className='navbar'>
        <h1>Clever Title</h1>
        <div className='zip-container-row'>
          <input className='form-control' type='text' placeholder='Mexico City, Mexico' />
          <button className='btn btn-success' type='submit'>Get Weather</button>
        </div>
      </div>
    )
  }
}

module.exports = Header;