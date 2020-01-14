import * as type from "../types/index";
import axios from "axios";

const Loading = () => {
  return {
    type: type.LOADING_STATE
  };
};

const Error_load = err => {
  return {
    type: type.LOADED_ERROR,
    payload: err
  };
};

export const SecessFullyDataRecive = () => {
  return dispatch => {
    dispatch(Loading());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        dispatch({ type: type.LOADED_SUCSESS, payload: res.data });
      })
      .catch(e => {
        dispatch(Error_load(e));
      });
  };
};
