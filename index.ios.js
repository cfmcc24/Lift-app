import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import LiftsListContainer from './js/containers/LiftsListContainer';
import AddLift from './js/containers/AddLift';
import liftApp from './js/reducers'

let store = createStore(liftApp);

export default class JustifyContentBasics extends Component {

	render() {
		return (
			<Provider store= { store }>
				<View style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
				<View style={{flex: 1, backgroundColor: 'powderblue'}}>
				  <AddLift />
				</View>
				<View style={{flex: 1, height: 50, backgroundColor: 'skyblue'}}>
				  <LiftsListContainer />
				</View>
				<View style={{flex: 1, height: 50, backgroundColor: 'steelblue'}}>
				  <Text> Sup Nerd </Text>
				</View>
			</View>
			</Provider>
		);
	}
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('LiftApp', () => JustifyContentBasics);
