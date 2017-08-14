const recentLift = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_LIFTS':
      return action.recentLift;
    default:
      return state;
  }
};

export default recentLift;
