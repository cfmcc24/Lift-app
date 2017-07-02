import React, { Component } from 'react';
import { View } from 'react-native';
import LiftsListContainer from './js/containers/LiftsListContainer';
import AddLift from './js/containers/AddLift';

export default class App extends Component {
  render() {
    <div>
      <View style={Styles.container}>
				<AddLift />
        <LiftsListContainer />
      </View>
    </div>
  }
}
