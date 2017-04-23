import React, { PureComponent } from 'react';
import moment from 'moment';

import { View, Text, StyleSheet } from 'react-native';

class CountDown extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      date: moment().format('MMMM Do YYYY, h:mm:ss A'),
      bigDay: moment('2017 10 03', 'YYYY MM DD'),
      duration: '',
    };

    this.interval = setInterval(this.updateTime, 1000);
  }

  componentDidMount() {
    this.updateTime();
    this.interval;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime = () => {
    let newDate = moment().format('MMMM Do YYYY, h:mm:ss A');
    let diff = this.state.bigDay.diff(moment());
    let duration = moment.duration(diff);
    this.setState({ date: newDate, duration: this.convertLength(duration) });
  };

  convertLength = duration => {
    let lengths = ['months', 'weeks', 'days'];
    let periods = lengths.map(function(time) {
      return duration.as(time);
    });
    let diff = {
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
      human: duration.humanize(),
    };
    periods.forEach(function(element, index, array) {
      diff[lengths[index]] = Math.floor(element);
    });

    return diff;
  };

  render() {
    const data = this.state.duration;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: 'white',
          padding: 5,
          borderRadius: 5,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontWeight: '200', color: 'white' }}>Days</Text>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            {data.days}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontWeight: '200', color: 'white' }}>Hours</Text>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            {data.hours}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontWeight: '200', color: 'white' }}>Minutes</Text>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            {data.minutes}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontWeight: '200', color: 'white' }}>Seconds</Text>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            {data.seconds}
          </Text>
        </View>
      </View>
    );
  }
}

export default CountDown;
