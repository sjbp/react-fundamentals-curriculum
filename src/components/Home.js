var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Enter a City and a State</h1>
        <div className='zip-container-col'>
          <input type='text' placeholder='Mexico City, Mexico' />
          <button type='submit'>Submit</button>
        </div>
      </div>
    )
  }
}

module.exports = Home;