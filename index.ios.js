/**
 * @flow
 */
import React, { Component } from 'react';
import LiftsListContainer from './js/containers/LiftsListContainer';
import AddLift from './js/containers/AddLift';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Styles from './js/styles/AppContainer';

export default class LiftApp extends Component {
  render() {
    return (
      <View style={Styles.container}>
				<AddLift />
        <LiftsListContainer />
      </View>
    );
  }
}

AppRegistry.registerComponent('LiftApp', () => LiftApp);
