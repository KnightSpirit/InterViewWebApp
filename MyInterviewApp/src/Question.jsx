import React from 'react';
import { questionDict } from './helper';
import { connect } from 'react-redux';
import styles from './Question.less';
import { PostAsAsync, ForPost } from './action/action';

class Question extends React.Component {
  constructor() {
    super();
    this.WriteAnswer = this.WriteAnswer.bind(this);
    this.PostMyAnswer = this.PostMyAnswer.bind(this);
    this.state = {
      ans: ''
    }
  }
  WriteAnswer(e) {
    let val = e.target.value;
    this.setState((p, c) => {
      return {
        ans: val
      }
    });
  }

  PostMyAnswer() {
    this.props.dispatch(ForPost(true));
    this.props.dispatch(PostAsAsync(this.state.ans));
  }
  
  render() {
    if (!this.props.QuestionIns) return '';
    let { Q_Note, Q_Type, Q_Selection } = this.props.QuestionIns;
    let qTypeDescription = questionDict[Q_Type];
    let answerArea = Q_Type === 'select' ? null : <textarea className={styles['ans_area']} onChange={this.WriteAnswer}></textarea>;
    return (
      <div>
        <h3><span>{Q_Type}</span>第{this.props.key}题</h3>
        <p>{Q_Note}</p>
        { answerArea }
        <button onClick={this.PostMyAnswer}>提交答案</button>
      </div>
    )
  }
}

export default connect()(Question);