const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'MATCHING':
      return action.payload
    default:
      return state
  }
}

export default reducer