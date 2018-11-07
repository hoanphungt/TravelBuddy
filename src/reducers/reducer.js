import travelers from '../data/travelers'


const reducer = (state = [travelers] , action = {}) => {
  switch (action.type) {
    case 'MATCHING':
      return  [...state, action.payload]
    case 'SIGN_IN':
    return  [...state, action.payload]
    case 'NEW_USER':
    state[0].push(action.payload)
    return  [...state]
    default:
      return state
  }
}

export default reducer