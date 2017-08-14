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
    const styles = PreviousLiftStyles;
    return (
      <View style={styles.outerContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            {recentLift.liftName}
          </Text>
          <Text style={styles.date}>
            {recentLift.liftDate}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.setsNumber}>{recentLift.sets}</Text>
          <Text style={styles.setsText}>sets</Text>
          <Text style={styles.of}>of</Text>
          <Text style={styles.setsNumber}>{recentLift.reps}</Text>
          <Text style={styles.setsText}>reps</Text>
        </View>
        <Text style={styles.title}>
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
