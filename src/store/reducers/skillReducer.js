const initState = [];

const skillReducer = (state = initState, action) => {
  switch (action.type) {
    case "REQUEST_SKILL":
      console.log("requesting skill", action);
      return {};
    case "RECEIVED_SKILL":
      console.log("received skill", action);
      return {...action.skills};
    default:
      return state;
  }
};
export default skillReducer;