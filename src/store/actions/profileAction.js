import { backendUrl } from "../../config/api";

export const getProfile = userId => {
  console.log("userID from profile ",userId)
  return dispatch => {
    dispatch({ type: "REQUEST_PROFILE", userId });
    fetch(backendUrl + "/users/" + userId + '/profile')
      .then(res => res.json())
      .then(json => dispatch({ type: "RECEIVED_PROFILE", profile: json[0] }));
  };
};

export const updateProfile = (userId, profile) => {
    console.log('update', userId,profile)
    return dispatch => {
      dispatch({ type: "UPDATE_PROFILE", userId });
      fetch(backendUrl + "/users/" + userId + '/profile/', {
          method: 'put',   headers: {'Content-Type': 'application/json'}, body: JSON.stringify(profile)
      })
        .then(res => res.json, err => console.log("error", err))
        .then(json => dispatch({ type: "UPDATED_PROFILE", profile: json }));
    };
};
