import { FETCH_USER, CREATE_QUIZ } from "./types";
import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/auth/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const createQuiz = () => async (dispatch) => {
  const res = await axios.post("/api/quiz/new");
  dispatch({
    type: CREATE_QUIZ,
    payload: res.data,
  });
};
