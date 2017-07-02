import { connect } from 'react-redux';
import { LiftsList } from '../components/LiftsList';
import { logLift } from '../actions/Lifts';

const mapStateToProps = (state) => {
  return {
    lifts: state.lifts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLiftClick: (id) => {
      dispatch(logLift(id));
    }
  }
}

const LiftsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (LiftsList);

export default LiftsListContainer;
