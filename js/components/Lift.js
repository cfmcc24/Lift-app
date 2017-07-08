/**
 * @flow
 */
import React, { Component }  from 'react'
import PropTypes from 'prop-types'

class Lift extends Component {
  render() {
    return (
      <li onClick={this.props.onClick}>
        {this.props.text}
      </li>
    );
  }
}

Lift.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Lift
