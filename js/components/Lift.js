/**
 * @flow
 */
import React, { Component }  from 'react'
import PropTypes from 'prop-types'

class Lift extends Component {
  render() {
    return (
      <View>
        A Lift
      </View>
    );
  }
}

Lift.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Lift
