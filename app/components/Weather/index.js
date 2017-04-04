import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native'

class Weather extends Component {

  state = {
    weather: ''
  }

  getWeather() {
    this.fetchWeather().then((response) => {
      this.setState({
        weather: response
      })
    });
  }

  fetchWeather() {
    let url = `http://api.wunderground.com/api/88fa17d19b77bfc5/conditions/q/pws:KNMALBUQ357.json`

    return fetch(url).then((response) => response.json())
  }


  componentDidMount() {
    this.getWeather()
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{ color: 'white'}}>Temp: {this.state.weather && this.state.weather.current_observation.temp_f} (F)</Text>
        <Text style={{ color: 'white'}}>Wind Speed: {this.state.weather && this.state.weather.current_observation.wind_mph} (mph)</Text>
        <Text style={{ color: 'white'}}>Wind Direction: {this.state.weather && this.state.weather.current_observation.wind_dir}</Text>
      </View>
    )
  }
}

export default Weather
