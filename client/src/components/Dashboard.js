import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../actions";

class Dashboard extends Component {
  render() {
    return (
      <div className="ui segment">
        <h2>My Quizes...</h2>
        <div className="ui attached segment">
          <p>My list of quizes</p>
          <Link
            to="/quiz/new"
            className="ui bottom attached green button"
            tabIndex="0"
          >
            <i className="plus icon"></i>
            Create Quiz
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userQuizes }) => {
  return { userQuizes };
};

export default connect(mapStateToProps, actions)(Dashboard);
