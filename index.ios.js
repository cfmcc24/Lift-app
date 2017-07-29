import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import LiftsListContainer from './js/containers/LiftsListContainer';
import RecentLiftContainer from './js/containers/RecentLiftContainer';
import liftApp from './js/reducers';
import AppContainerStyles from './js/styles/AppContainer';

let store = createStore(liftApp);
let styles = AppContainerStyles;

export default class JustifyContentBasics extends Component {
	render() {
		return (
			<Provider store = { store }>
				<View style={styles.container}>
					<View style = {styles.recentLift}>
						<View style = {styles.contentContainer}>
							<RecentLiftContainer />
						</View>
					</View>
					<View style = {styles.liftsList}>
						<View style = {styles.contentContainer}>
							<LiftsListContainer />
						</View>
					</View>
				</View>
			</Provider>
		);
	}
};

AppRegistry.registerComponent('LiftApp', () => JustifyContentBasics);
