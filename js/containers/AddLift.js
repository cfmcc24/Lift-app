import React from 'react';
import { connect } from 'react-redux';
import { addLift } from '../actions/Lifts';

class AddLift extends Component {
	render() {
		let input;
		return (
			<div>
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
			</div>
		);
  }
}

AddLift = connect()(AddLift);

export default AddLift;
