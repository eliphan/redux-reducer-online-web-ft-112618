<<<<<<< HEAD
export function manageFriends(state = { friends: [] }, action) {
  switch(action.type) {
    case "ADD_FRIEND":
      return ( 
        {...state, friends: [...state.friends, action.friend]}
    )
    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
            ]
        }
      )
    default:
      return state
=======
export function manageFriends(state, action){
  action = {
    type: "ADD_FRIEND";
    friend: "Chrome Boi"
>>>>>>> 0e6d78de36d17b164c6f1ff35df8b2f73bc93c07
  }
}
