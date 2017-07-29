import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLift } from '../actions/Lifts';
import { View, Button } from 'react-native';

class AddLift extends Component {
  render() {
    let input;
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

  addLift() {
    this.props.dispatch(addLift("Hey"));
  }
}

AddLift = connect()(AddLift);
export default AddLift;
