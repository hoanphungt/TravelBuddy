import travelers from '../data/travelers'


const reducer = (state = [travelers,{}] , action = {}) => {
  switch (action.type) {
    case 'MATCHING':
      state = [...state]
      state[2] = action.payload
      return state
    // ADD a match to the table of possible matches
    case 'ADD_POSSIBLE_MATCH':
      state = [...state]
      // Filter out only the preson I just clicked
      const database = [...action.payload.database]
      const clickedUser = database.filter(user => user.id === action.payload.id)[0]
      const currentUser = state[1]
      // First check if the person is already in my peopleILiked array
      if (!currentUser.peopleILiked.includes(clickedUser.id)) {currentUser.peopleILiked.push(clickedUser.id)}

      // Check to see if the currectUser's id is inside the peopleILiked array
      // of the clickedUser. If so, each id should be added to the other's user
      // matches array
      if (clickedUser.peopleILiked.includes(currentUser.id)) {
        if (!clickedUser.matches.includes(currentUser.id)) {
          clickedUser.matches.push(currentUser.id)
        }
        if (!currentUser.matches.includes(clickedUser.id)) {
          currentUser.matches.push(clickedUser.id)
        }
      }
      return state
    case 'CLEAR_ALL_MATCHES':
      state = [...state]
      state[2] = []
      return state
    case 'SIGN_IN':
    state = [...state]
    state[1] = action.payload
    return state
    case 'SIGN_OUT':
    state = [...state]
    state[1] = action.payload
    return state
    //return [...state, action.payload]    
    case 'NEW_USER':
      state[0].push(action.payload)
      return [...state]

    default:
      return state
  }
}

export default reducer