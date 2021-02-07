import { STUDENTS_FAIL, STUDENTS_REQUEST, STUDENTS_SUCCESS } from "./types";

const INITIAL_STATE = {
  isLoading: false,
  list: [],
};

export const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case STUDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case STUDENTS_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
