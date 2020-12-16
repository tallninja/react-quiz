import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import QuizNew from "./quiz/QuizNew";

const Landing = () => <div>Welcome</div>;
const Quiz = () => <div>Quiz</div>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <Navbar />
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/home" component={Dashboard} />
          <Route exact={true} path="/quiz/new" component={QuizNew} />
          <Route exact={true} path="/quiz" component={Quiz} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
