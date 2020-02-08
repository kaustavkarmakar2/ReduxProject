const initState = {};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "REQUEST_PROFILE":
      console.log("requesting profile", action);
      return {};
    case "RECEIVED_PROFILE":
      console.log("received profile", action);
      return {...action.profile};
    default:
      return state;
  }
};
export default profileReducer;