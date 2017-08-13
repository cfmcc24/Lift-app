import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { addLift } from '../actions/Lifts';

class AddLift extends Component {
  addLift() {
    this.props.dispatch(addLift('Hey'));
  }

  render() {
    return (
      <View>
        <Button
          onPress={addLift}
          title="Add Lift"
          color="#841584"
          accessibilityLabel="Add a lift"
        />
      </View>
    );
  }
}

AddLift.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

AddLift = connect()(AddLift);
export default AddLift;
