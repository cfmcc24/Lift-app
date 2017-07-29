import { connect } from 'react-redux';
import { logLift } from '../actions/Lifts';
import RecentLift from '../components/RecentLift';

const mapStateToProps = (state) => {
  return {
    recentLift: state.recentLift
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRecentLiftClick: (id) => {
      dispatch(collapseLift(id));
    }
  }
}

const LiftsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentLift);

export default LiftsListContainer;
