import travelers from '../data/travelers'
const currentUser = {
  id: 1,
  photo: '',
  firstName: 'Haleema',
  lastName: 'Greenwood',
  location: 'London',
  preferences: ['Museums', 'Nightlife'],
  languages: ['english', 'french'],
  stars: 4,
  feedback: ['Haleema habitually plans and sequences own work and that of others. Ensures that objectives are clearly established, and that work is systematically carried out in order to achieve the objectives. Communicates plans clearly to others. A natural leader. People tend to listen and follow her example and guidance. Haleema is chosen as leader without making an issue of leadership.',
            'Always eager to take on a new task, whether hard or simple, and tackles it diligently, without question or complaint. This positive attitude inspires others too.',
            'Prioritizes and sequences own tasks and those of other people in the team. Makes sure that the priority tasks are always completed on time.'],
  bio: 'Bacon ipsum dolor amet boudin tenderloin meatloaf, tri-tip ham shank short ribs kielbasa biltong ground round chicken pork loin chuck pork. Pastrami buffalo jowl, spare ribs beef ribs ham chuck cupim turducken doner swine kevin alcatra tri-tip picanha. Leberkas sausage pork alcatra porchetta ham, pig short loin. Pastrami salami frankfurter andouille cow jerky. Rump pork burgdoggen tail chicken. Pig picanha jowl, pastrami chicken fatback jerky andouille sausage turkey drumstick shank cupim biltong. Shankle pork belly pastrami turducken doner.',
  availability: true,
  peopleILiked: [2, 3],
  matches: [2]
}

const reducer = (state = [travelers,currentUser] , action = {}) => {
  switch (action.type) {
    case 'MATCHING':
      return  [...state, action.payload]
    default:
      return state
  }
}

export default reducer