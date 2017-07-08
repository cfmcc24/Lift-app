/**
 * @flow
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Lift from './Lift';

class LiftsList extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}

LiftsList.propTypes = {
  lifts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onLiftClick: PropTypes.func.isRequired
}

export default LiftsList;
