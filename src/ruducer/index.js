import * as type from "../types/index";
const initState = {
  data: [],
  loading: false,
  error: []
};

export const Ruducer = (state = initState, action) => {
  switch (action.type) {
    case type.LOADING_STATE:
      return {
        ...state,
        loading: true
      };
    case type.LOADED_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case type.LOADED_SUCSESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
