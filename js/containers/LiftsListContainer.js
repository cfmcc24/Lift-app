import { connect } from 'react-redux';
import { logLift } from '../actions/Lifts';
import LiftsList from '../components/LiftsList';

const mapStateToProps = state => ({
  lifts: state.lifts,
});

const mapDispatchToProps = dispatch => ({
  onLiftClick: (id) => {
    dispatch(logLift(id));
  },
});

const LiftsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiftsList);

export default LiftsListContainer;
