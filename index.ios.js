/**
 * @flow
 */
import React, { Component } from 'react';
import LiftsTable from './js/LiftsTable';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class LiftApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<LiftsTable />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('LiftApp', () => LiftApp);
