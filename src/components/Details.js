var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');

class Details extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      icon: null,
      date: null,
      city: null,
      description: null,
      minTemp: null,
      maxTemp: null,
      humidity: null,
    }
  }

  componentDidMount () {
    var city = queryString.parse(this.props.location.search).city;

    api.getWeather(city)
      .then(function (weather) {

        if (weather === null) {
          console.log("Error!!")
          return this.setState(function () {
            return {
              loading: false,
              error: 'Looks like there was error. Double check you got the correct city!',
            }
          })
        }

        this.setState(function () {
        return {
          loading: false,
          error: null,
          icon: weather.icon,
          date: weather.date,
          city: weather.city,
          description: weather.description,
          minTemp: weather.minTemp,
          maxTemp: weather.maxTemp,
          humidity: weather.humidity,
        }
      })

        console.log(weather)
        console.log(this.state);

      }.bind(this));
  }

  render () {
    var loading = this.state.loading;
    if (loading) {
      return (
        <div className='details-container'>
          <h1 className='details-header'>Loading Details Page!!</h1>
        </div>
      )
    }

    var icon = this.state.icon;
    var date = this.state.date;
    var city = this.state.city;
    var description = this.state.description;
    var minTemp = this.state.minTemp;
    var maxTemp = this.state.maxTemp;
    var humidity = this.state.humidity;

    return (
      <div className='details-container'>
        <div className='day-container'>
          <img className='weather' src={require('../images/weather-icons/' + icon + '.svg')} alt='Weather' />
          <h2 className='subheader'>{date}</h2>
        </div>
        <div className='description-container'>
          <p>{city}</p>
          <p>{description}</p>
          <p>min temp: {minTemp + ' ℃'}</p>
          <p>max temp: {maxTemp + ' ℃'}</p>
          <p>humidity: {humidity + '%'}</p>
        </div>
      </div>
    )
  }};

module.exports = Details;