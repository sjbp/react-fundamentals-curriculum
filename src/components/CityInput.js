var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class CityInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function() {
      return {
        location: value
      }
    })
  }

  render() {
    var className = 'zip-container';
    var location = this.state.location;

    if (this.props.isRowLayout) {
      className += '-row';
    } else {
      className += '-col';
    }

    return(
      <div>
        <form className={className} onSubmit={this.handleSubmit}>
          <input
            className='form-control'
            type='text'
            placeholder='Mexico City, Mexico'
            value={this.state.location}
            onChange={this.handleChange}
          />
          <Link
            className='btn btn-success'
            // disabled={!this.state.location} // TODO(sebastianj): disable if emtpy?
            to={{
              pathname: '/details',
              search: '?city=' + location,
            }}>
          Get Weather
          </Link>
        </form>
      </div>
    )
  }
};

CityInput.propTypes = {
  isRowLayout: PropTypes.bool.isRequired,
};

CityInput.defaultProps = {
  isRowLayout: false
};

module.exports = CityInput;