import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLift } from '../actions/Lifts';
import { View } from 'react-native';

class AddLift extends Component {
  render() {
    let input;
    return (
      <View>
      </View>
    );
  }
}

AddLift = connect()(AddLift);
export default AddLift;
