import { backendUrl } from "../../config/api";

export const getSkill = userId => {
  return dispatch => {
    dispatch({ type: "REQUEST_SKILL", userId });
    fetch(backendUrl + "/users/" + userId + '/skills')
      .then(
        res => res.json())
      .then(json => dispatch({ type: "RECEIVED_SKILL", skills: json }));
  };
};

export const updateSkill = (userId, skills) => {
    console.log('update', userId,skills)
    return dispatch => {
      dispatch({ type: "UPDATE_SKILL", userId });
      fetch(backendUrl + "/users/" + userId + "/skills/", {
          method: 'put',   headers: {'Content-Type': 'application/json'}, body: JSON.stringify(skills)
      })
        .then(res => res.json, err => console.log("error", err))
        .then(json => dispatch({ type: "UPDATED_SKILL", skills: json }));
    };
};