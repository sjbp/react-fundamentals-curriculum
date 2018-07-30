var axios = require('axios');

var sec = '34c3f0860bfabd22b640830841886faf';
var params = '&type=accurate&APPID=' + sec;

function getWeather (location) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + params)
    .then(function (weather) {
      return weather.data;
    });
}

function convertKelvinToCelsius (kelvin) {
  if (kelvin < (0)) {
    return 'below absolute zero (0 K)';
  } else {
    return (kelvin-273.15);
  }
}

function convertUTCSecToDate (utcSeconds) {
  var d = new Date(utcSeconds * 1000);
  return d.toLocaleDateString(undefined, {
    day : 'numeric',
    month : 'short',
    year : 'numeric'
  })
}

function cleanWeatherData (weather) {
  if (weather === null || weather.cod !== 200) {
    return null;
  }

  return {
    cod: weather.cod,
    icon: weather.weather[0].icon,
    date: convertUTCSecToDate(weather.dt),
    city: weather.name,
    description: weather.weather[0].description,
    minTemp: convertKelvinToCelsius(weather.main.temp_min),
    maxTemp: convertKelvinToCelsius(weather.main.temp_max),
    humidity: weather.main.humidity,
  }
}

function handleError (error) {
  console.warn(error);
  return null;
}

module.exports = {
  getWeather: function (location) {
    return getWeather(location)
      .catch(handleError)
      .then(cleanWeatherData);
  }
}