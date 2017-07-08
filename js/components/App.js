import React, { Component } from 'react';
import { View } from 'react-native';
import LiftsListContainer from '../containers/LiftsListContainer';
import AddLift from '../containers/AddLift';
import AppContainerStyles from '../styles'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import liftApp from '../reducers'

let store = createStore(liftApp);

export default class App extends Component {
  render() {
    return (
      <View style={ AppContainerStyles.container }>
        <Provider store= { store }>
          <View>
            <AddLift />
            <LiftsListContainer />
          </View>
        </Provider>
      </View>
    );
  }
}
