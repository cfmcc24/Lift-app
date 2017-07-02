/**
 * @flow
 */
import React, { Component } from 'react';

import Styles from './js/styles/AppContainer';
import App from './js/components/App'

import { AppRegistry, View } from 'react-native';

export default class LiftApp extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('LiftApp', () => LiftApp);
