import { backendUrl } from "../../config/api";

export const login = creds => {
  return dispatch => {
    dispatch({ type: "LOGIN_REQ" });
    fetch(backendUrl + "/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(creds)
    })
      .then(
        res => res.json,
        err => {
          console.log("error", err);
          dispatch({ type: "LOGIN_FAIL", err });
        }
      )
      .then(json => dispatch({ type: "LOGIN_SUCCESS", userId: json.userId }));
  };
};
