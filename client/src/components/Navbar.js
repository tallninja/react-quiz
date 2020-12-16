import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class Navbar extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  renderAuthContent = () => {
    switch (this.props.auth) {
      case false:
        return (
          <div className="right menu">
            <a className="ui item" href="/auth/google">
              <button className="small ui google plus button">
                <i className="google icon"></i>
                Login
              </button>
            </a>
            <a className="ui item" href="/auth/github">
              <button className="small ui black button">
                <i className="github icon"></i>
                Login
              </button>
            </a>
          </div>
        );
      case null:
        return (
          <div className="right menu">
            <a className="ui item" href="/#">
              <div className="ui active tiny centered inline loader"></div>
            </a>
          </div>
        );
      default:
        return (
          <div className="right menu">
            <a className="ui item" href="/auth/logout">
              <span style={{ marginRight: "5px" }}>Logout</span>
              <i className="sign-out icon"></i>
            </a>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="ui secondary pointing menu">
        <a className="active item" href={`${this.props.auth ? "/home" : "/"}`}>
          Home
        </a>
        {this.renderAuthContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(Navbar);
