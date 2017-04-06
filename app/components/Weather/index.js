import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import moment from 'moment';

class Weather extends Component {
  state = {
    weather: '',
    last_updated: '',
  };

  // TODO: get this working with AsynStorage so we arent polling the API except every 5 minutes or so :)
  getWeatherLastUpdated = () => {};

  getWeather = () => {
    this.fetchWeather().then(response => {
      this.setState({
        weather: response,
        last_updated: moment(response.current_observation.local_time_rfc822),
      });
    });
  };

  fetchWeather = () => {
    let url = `http://api.wunderground.com/api/88fa17d19b77bfc5/conditions/q/pws:KNMALBUQ415.json`;
    return fetch(url).then(response => response.json());
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return this.state.weather.current_observation
      ? <View style={{ alignItems: 'center' }}>

          <TouchableOpacity onPress={() => this.getWeather()}>
            <Text>Update Weather</Text>
          </TouchableOpacity>
          <Text style={{ color: 'white' }}>
            Temp:
            {' '}
            {this.state.weather.current_observation.temp_f}
            {' '}
            (F) - Feels Like:
            {' '}
            {this.state.weather.current_observation.feelslike_f}
            {' '}
            (F)
          </Text>
          <Text style={{ color: 'white' }}>
            Wind Speed: {this.state.weather.current_observation.wind_mph} (mph)
          </Text>
          <Text style={{ color: 'white' }}>
            Wind Gust:
            {' '}
            {this.state.weather.current_observation.wind_gust_mph}
            {' '}
            (mph)
          </Text>
          <Text style={{ color: 'white' }}>
            Wind Chill: {this.state.weather.current_observation.windchill_f} (F)
          </Text>
          <Text style={{ color: 'white' }}>
            Wind Direction: {this.state.weather.current_observation.wind_dir}
          </Text>
          <Text style={{ fontSize: 10, color: 'white' }}>
            Last Updated:
            {' '}
            {this.state.last_updated &&
              moment(this.state.last_updated).format('M/D/YYYY hh:mm:ss')}
          </Text>
        </View>
      : <View />;
  }
}

export default Weather;
