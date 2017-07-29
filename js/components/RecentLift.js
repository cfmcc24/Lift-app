/**
 * @flow
 */
import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import PreviousLiftStyles from '../styles/PreviousLift';

class RecentLift extends Component {
  render() {
    return (
      <View style = {{flex: 1, flexDirection: 'column', paddingTop: 25}}>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}> 
          <Text style = {PreviousLiftStyles.title}>
            Sup Dude
          </Text>
          <Text style = {{textAlign: 'right'}}>
            07/30/2017
          </Text>
        </View>
        <Text style = {PreviousLiftStyles.title}>
          Hey There
        </Text>
      </View>
    );
  }
}

export default RecentLift
