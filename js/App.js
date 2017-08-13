import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LiftsListContainer from './containers/LiftsListContainer';
import RecentLiftContainer from './containers/RecentLiftContainer';
import liftApp from './reducers';
import AppContainerStyles from './styles/AppContainer';

const store = createStore(liftApp);
const styles = AppContainerStyles;

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.recentLift}>
          <View style={styles.contentContainer}>
            <RecentLiftContainer />
          </View>
        </View>
        <View style={styles.liftsList}>
          <View style={styles.contentContainer}>
            <LiftsListContainer />
          </View>
        </View>
      </View>
    </Provider>
  );
}

export default App;
