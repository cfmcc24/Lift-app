import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import PreviousLiftStyles from '../styles/PreviousLift';

class RecentLift extends Component {
  render() {
    return (
      <View style={PreviousLiftStyles.outerContainer}>
        <View style={PreviousLiftStyles.contentContainer}>
          <Text style={PreviousLiftStyles.title}>
            Sup Dude
          </Text>
          <Text style={PreviousLiftStyles.date}>
            07/30/2017
          </Text>
        </View>
        <Text style={PreviousLiftStyles.title}>
          Hey There
        </Text>
      </View>
    );
  }
}

export default RecentLift;
