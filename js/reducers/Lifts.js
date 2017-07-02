const lifts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIFT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'LOG_LIFT':
      console.log(action.liftId)
      return state
    default:
      return state
  }
}

export default lifts;
