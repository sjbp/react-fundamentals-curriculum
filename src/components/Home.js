var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1 className='header'>Enter a City and a State</h1>
        <div className='zip-container-col'>
          <input className='form-control' type='text' placeholder='Mexico City, Mexico' />
          <button className='btn btn-success' type='submit'>Get Weather</button>
        </div>
      </div>
    )
  }
}

module.exports = Home;