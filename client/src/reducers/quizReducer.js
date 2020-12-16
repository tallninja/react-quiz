import { CREATE_QUIZ } from "../actions/types";

const quizreducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_QUIZ:
      return action.payload || false;
    default:
      return state;
  }
};

export default quizreducer;
