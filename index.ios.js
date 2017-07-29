import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import LiftsListContainer from './js/containers/LiftsListContainer';
import RecentLiftContainer from './js/containers/RecentLiftContainer';
import liftApp from './js/reducers'

let store = createStore(liftApp);

export default class JustifyContentBasics extends Component {

	render() {
		return (
			<Provider store = { store }>
				<View style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'space-between'}}>
					<View style = {{flex: 1, backgroundColor: 'powderblue'}}>
						<View style = {{flex: 1, marginRight: 15, marginLeft: 15}}>
							<RecentLiftContainer />
						</View>
					</View>
					<View style = {{flex: 3, backgroundColor: 'skyblue'}}>
						<View style = {{flex: 1, marginRight: 15, marginLeft: 15}}>
							<LiftsListContainer />
						</View>
					</View>
				</View>
			</Provider>
		);
	}
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('LiftApp', () => JustifyContentBasics);
