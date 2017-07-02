/**
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Styles from './js/styles/AppContainer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import liftApp from './js/reducers'
import App from './js/components/App'

export default class LiftApp extends Component {
	let store = createStore(liftApp);
	
  render() {
    return (
		  <Provider>
			  <App />
			</Provider>
    );
  }
}

AppRegistry.registerComponent('LiftApp', () => LiftApp);
