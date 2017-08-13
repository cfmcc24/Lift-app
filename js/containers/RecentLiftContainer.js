import { connect } from 'react-redux';
import RecentLift from '../components/RecentLift';

const mapStateToProps = state => ({
  recentLift: state.recentLift,
});

const mapDispatchToProps = dispatch => ({
  onRecentLiftClick: (id) => {
    dispatch(collapseLift(id));
  },
});

const LiftsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentLift);

export default LiftsListContainer;
