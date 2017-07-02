import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLift } from '../actions/Lifts';
import { View } from 'react-native';

class AddLift extends Component {
  render() {
    let input;
    return (
      <View>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addLift(input.value))
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Add Lift
          </button>
        </form>
      </View>
    );
  }
}

AddLift = connect()(AddLift);
export default AddLift;
