import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './js/App';

export default class Main extends Component {
	render() {
		return (
      <App/>
		);
	}
};

AppRegistry.registerComponent('LiftApp', () => Main);
