/**
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lift from './Lift';

class LiftsList extends Component {
	render() {
		<ul>
			{ this.props.lifts.map(lift => (
				<Lift key={lift.id} {...lift} onClick={() => onLiftClick(lift.id)} />
			)) }
		</ul>
	};
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
