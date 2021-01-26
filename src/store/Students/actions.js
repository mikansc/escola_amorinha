import AxiosStudentAPI from "../../services/AxiosStudentAPI";
import { STUDENTS_FAIL, STUDENTS_REQUEST, STUDENTS_SUCCESS } from "./types";

export const listStudents = () => async (dispatch) => {
  dispatch({ type: STUDENTS_REQUEST });
  try {
    const data = await AxiosStudentAPI.findAll();
    console.log(data);
    dispatch({ type: STUDENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: STUDENTS_FAIL });
  }
};
