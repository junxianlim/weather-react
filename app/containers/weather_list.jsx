import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.jsx';
import CityMap from '../components/city_map.jsx';

function renderWeather(cityData) {
  const name = cityData.city.name
  const { lon, lat } = cityData.city.coord
  const marker = { lat, lon, key: name, defaultAnimation: 2 }
  const temps = cityData.list.map(weather => weather.main.temp - 273.15)
  const pressures = cityData.list.map(weather => weather.main.pressure);
  const humidities = cityData.list.map(weather => weather.main.humidity);

  return (
    <tr key={name}>
      <td><CityMap lon={lon} lat={lat} marker={marker} /></td>
      <td><Chart data={temps} color="red" units="C" /></td>
      <td><Chart data={pressures} color="orange" units="hPA" /></td>
      <td><Chart data={humidities} color="green" units="%" /></td>
    </tr>
  )
}

function WeatherList({weather}) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>

      <tbody>
        { weather.map(renderWeather) }
      </tbody>
    </table>
  )
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
