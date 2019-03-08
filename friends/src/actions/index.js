import axiosAuth from "../components/axiosAuth";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loggingIn = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosAuth
    .post("https:localhost:5000/api/login", credentials)
    .then(data => {
      console.log(data.payload);
      localStorage.setItem("token", data.payload);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data.payload
      });
      // getData();
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};
export const addTokenToLocalStorage = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem("userToken", action.payload.token);
  }
  next(action);
};
// export const getData = () => {
//   axios
//     .get("/api/friends", {
//       headers: { Authorization: localStorage.getItem("token") }
//     })
//     .then(res => {
//       console.log(res.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
