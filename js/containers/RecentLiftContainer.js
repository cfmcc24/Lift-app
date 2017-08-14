import { connect } from 'react-redux';
import { fetchRecentLift } from '../actions/Lifts';
import RecentLift from '../components/RecentLift';

const mapStateToProps = state => ({
  recentLift: state.recentLift,
});

const mapDispatchToProps = dispatch => ({
  fetchRecentLift: () => {
    dispatch(fetchRecentLift());
  },
});

const LiftsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentLift);

export default LiftsListContainer;
