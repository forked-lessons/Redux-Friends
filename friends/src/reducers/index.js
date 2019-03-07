const initialState = {
  friends: [],
  fetchingFriends: false,
  loggedIn: false,
  error: null
};
const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
};
export default rootReducer;
