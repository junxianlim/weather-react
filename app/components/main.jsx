import React from 'react';
import styles from '../styles/styles.styl';
import SearchBar from '../containers/search_bar.jsx';
import WeatherList from '../containers/weather_list.jsx';

function Main() {
  return (
    <div className="container">
      <SearchBar />
      <WeatherList />
    </div>
  )
}

export default Main
