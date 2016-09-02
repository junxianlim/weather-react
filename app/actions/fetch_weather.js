import axios from 'axios';
import KEYS from '../config/keys';
import TYPE from '../config/type';

const URL = "http://api.openweathermap.org/data/2.5/forecast"

export function fetchWeather(term) {
  let params = {
    APPID: KEYS.weather_api,
    q: term
  }

  let request = axios.get(URL, { params: params})

  return {
    type: TYPE.fetch_weather,
    payload: request
  }
};
