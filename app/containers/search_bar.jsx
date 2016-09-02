import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/fetch_weather';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  onInputChange(e) {
    this.setState({ term: e.target.value })
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control" />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather: fetchWeather
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
