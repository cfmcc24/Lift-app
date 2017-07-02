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
    default:
      return state
  }
}

export default lifts;
