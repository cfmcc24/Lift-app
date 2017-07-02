let nextLiftId = 0

export const addLift = text => {
  return {
    type: 'ADD_LIFT',
    id: nextLiftId++,
    text
  }
}
