import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import QuizField from "./QuizField";

class CreateQuizForm extends Component {
  state = { questions: [], choices: [] };

  renderChoices = () => {
    return this.state.choices.map((choice) => {
      return (
        <div className="item">
          <div className="content">
            <Field
              label={choice.label}
              component={QuizField}
              type={choice.type}
              name={choice.name}
              placeholder={choice.placeholder}
            />
          </div>
        </div>
      );
    });
  };

  renderQuestions = () => {
    return this.state.questions.map((question) => {
      return (
        <div className="item" style={{ marginBottom: "20px" }}>
          <div className="content">
            <Field
              label={question.label}
              component={QuizField}
              type={question.type}
              name={question.name}
              placeholder={question.placeholder}
            />
            <div className="ui attached segment">
              <div className="ui ordered celled list">
                {this.renderChoices()}
              </div>
              <a
                className="ui bottom attached green button"
                href="#"
                onClick={() =>
                  this.setState({
                    choices: [
                      ...this.state.choices,
                      {
                        label: "Title",
                        type: "text",
                        name: "ola",
                        placeholder: "Title",
                        choices: [],
                      },
                    ],
                  })
                }
              >
                <i className="plus icon"></i>
                Add Choice
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Create Quiz</h2>
        <form className="ui form">
          <Field
            label="Title"
            component={QuizField}
            type="text"
            name="title"
            placeholder="Quiz Title"
          />

          <h3>Questions</h3>
          <div className="ui attached segment">
            <div className="ui ordered celled list">
              {this.renderQuestions()}
            </div>
            <a
              href="#"
              className="ui bottom attached green button"
              onClick={() =>
                this.setState({
                  questions: [
                    ...this.state.questions,
                    {
                      label: "Title",
                      type: "text",
                      name: "ola",
                      placeholder: "Title",
                      choices: [],
                    },
                  ],
                })
              }
            >
              <i className="plus icon"></i>
              Add Question
            </a>
          </div>

          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "createQuizForm",
})(CreateQuizForm);
