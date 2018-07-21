var React = require('react');

class Header extends React.Component {
  render() {
    return(
      <div className='navbar'>
        <h1>Clever Title</h1>
        <div className='zip-container-row'>
          <input type='text' placeholder='Mexico City, Mexico' />
          <button type='submit'>Submit</button>
        </div>
      </div>
    )
  }
}

module.exports = Header;