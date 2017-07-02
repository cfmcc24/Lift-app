/**
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Styles from './js/styles/AppContainer';
import liftApp from './js/reducers'
import App from './js/components/App'

import { AppRegistry, View } from 'react-native';

let store = createStore(liftApp);
export default class LiftApp extends Component {
  render() {
    return (
		  <Provider store = { store }>
			  <App />
			</Provider>
    );
  }
}

AppRegistry.registerComponent('LiftApp', () => LiftApp);
