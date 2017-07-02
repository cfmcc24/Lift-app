/**
 * @flow
 */
import React, { Component } from 'react';
import LiftsTable from './js/components/LiftsTable';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Styles from './js/styles/LiftsTable';

export default class LiftApp extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <LiftsTable />
      </View>
    );
  }
}

AppRegistry.registerComponent('LiftApp', () => LiftApp);
