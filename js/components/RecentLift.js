import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import PreviousLiftStyles from '../styles/PreviousLift';

class RecentLift extends Component {
  componentWillMount() {
    this.props.fetchRecentLift();
  }

  render() {
    const recentLift = this.props.recentLift;
    return (
      <View style={PreviousLiftStyles.outerContainer}>
        <View style={PreviousLiftStyles.contentContainer}>
          <Text style={PreviousLiftStyles.title}>
            {recentLift.liftName}
          </Text>
          <Text style={PreviousLiftStyles.date}>
            {recentLift.liftDate}
          </Text>
        </View>
        <Text style={PreviousLiftStyles.title}>
          {recentLift.sets} sets of {recentLift.reps} reps
        </Text>
        <Text style={PreviousLiftStyles.title}>
          Avg BPM: {recentLift.avgBpm} Max BPM: {recentLift.maxBpm}
        </Text>
      </View>
    );
  }
}

RecentLift.propTypes = {
  recentLift: PropTypes.shape({
    liftName: PropTypes.string.isRequired,
    liftDate: PropTypes.string.isRequired,
    sets: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
    avgBpm: PropTypes.number.isRequired,
    maxBpm: PropTypes.number.isRequired,
  }).isRequired,
  fetchRecentLift: PropTypes.func.isRequired,
};

export default RecentLift;
