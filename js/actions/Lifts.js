let nextLiftId = 0

export const addLift = text => {
  return {
    type: 'ADD_LIFT',
    id: nextLiftId++,
    text
  }
}

export const logLift = liftId => {
  return {
    type: 'LOG_LIFT',
    id: liftId
  }
}
