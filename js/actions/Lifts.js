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
