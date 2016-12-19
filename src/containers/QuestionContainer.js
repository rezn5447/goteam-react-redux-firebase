import React, { Component } from 'react';
class QuestionContainer extends Component {
  render() {
    return (
      <div className="Question-container">
        <h2>Question #1 {this.props.question}</h2>
        <div className="answers-list">
        {this.props.children}
        </div>
      </div>
    );
  }
}
export default QuestionContainer;
