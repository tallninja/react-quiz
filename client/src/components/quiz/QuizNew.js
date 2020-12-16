import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import CreateQuizForm from "./CreateQuizForm";

class QuizNew extends Component {
  render() {
    return <CreateQuizForm />;
  }
}

const mapStateToProps = ({ quiz }) => {
  return { quiz };
};

export default connect(mapStateToProps, actions)(QuizNew);
