import React from 'react';
import { connect } from 'react-redux';
import { PassTheAns } from './action/action';

class AnsBoard extends React.Component {
  constructor(){
    super();
    this.PassTheAnswerToParent = this.PassTheAnswerToParent.bind(this);
  }

  PassTheAnswerToParent(e) {
    let content = e.target.textContent;
    this.props.dispatch(PassTheAns(content));
  }

  render() {
    return (
      <div onBlur={this.PassTheAnswerToParent} suppressContentEditableWarning="true" contentEditable="true" style={{ overflow:'auto', padding:'0.5rem', background: 'white', outline: 'none', height: '100%' }} >
      </div>
    )
  }
}

export default connect()(AnsBoard);