import axios from "axios";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_START = "LOGIN_START";

export const loggingIn = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.payload);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.payload });
      getData();
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
    });
};

export const getData = () => {
  axios
    .get("/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
