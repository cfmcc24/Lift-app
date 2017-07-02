import { connect } from 'react-redux';
import { logLift } from '../actions/Lifts';
import LiftsList from '../components/LiftsList';

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
)(LiftsList);

export default LiftsListContainer;
