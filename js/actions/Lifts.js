let nextLiftId = 0;

export const addLift = (text) => {
  nextLiftId += 1;
  return {
    type: 'ADD_LIFT',
    id: nextLiftId + 1,
    text,
  };
};

export const logLift = liftId => ({
  type: 'LOG_LIFT',
  id: liftId,
});

export const fetchRecentLift = () => ({
  type: 'INIT_LIFTS',
  recentLift: {
    liftName: 'Dad',
    liftDate: '08/13/2017',
    sets: 3,
    reps: 5,
    avgBpm: 150,
    maxBpm: 500,
  },
});
