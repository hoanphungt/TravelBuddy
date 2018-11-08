import travelers from '../data/travelers'

const currentUser =  {
  id: 3,
  photo: './images/18.PNG',
  firstName: 'Joann',
  lastName: 'Decker',
  age : 34,
  location: 'Paris',
  preferences: ['Nightlife, Nature'],
  languages: [],
  stars: 4,
  feedback: ['Joann habitually plans and sequences own work and that of others. Ensures that objectives are clearly established, and that work is systematically carried out in order to achieve the objectives. Communicates plans clearly to others. A natural leader. People tend to listen and follow her example and guidance. Haleema is chosen as leader without making an issue of leadership.',
            'Always eager to take on a new task, whether hard or simple, and tackles it diligently, without question or complaint. This positive attitude inspires others too.',
            'Prioritizes and sequences own tasks and those of other people in the team. Makes sure that the priority tasks are always completed on time.'],
  bio: 'Buffalo pancetta capicola turkey, chuck venison frankfurter hamburger salami bresaola prosciutto. Ham hock rump ball tip shank leberkas shoulder strip steak tail beef burgdoggen sausage tenderloin. Bacon kevin tail, pork belly beef sausage burgdoggen chicken pancetta ribeye shank tenderloin picanha. Tail pork loin jowl pancetta salami ball tip spare ribs.',
  availability: true,
  peopleILiked: [1, 2],
  matches: [1]
}
const reducer = (state = [travelers,currentUser] , action = {}) => {
  switch (action.type) {
    case 'MATCHING':
      return  [...state, action.payload]
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

      console.log(state[1].peopleILiked)
      return state
    case 'CLEAR_ALL_MATCHES':
      state = [...state]
      state[2] = []
      return state
    case 'SIGN_IN':
      return  [...state, action.payload]
    case 'NEW_USER':
      state[0].push(action.payload)
      return [...state]

    default:
      return state
  }
}

export default reducer