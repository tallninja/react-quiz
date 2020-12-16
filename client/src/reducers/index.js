import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "./authReducer";
import quizReducer from "./quizReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  quiz: quizReducer,
});
