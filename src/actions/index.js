import axios from 'axios';

const keys = require('../../config/keys');

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${keys.openWeatherAPI}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}