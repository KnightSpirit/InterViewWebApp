import React from 'react';
import { connect } from 'react-redux';
import { GetQuestionsAsync, GetQuestions, ToastShow } from './action/action.js';
import styles from './Question.less';
import Question from './Question.jsx';
class QuestionContainer extends React.Component {
  constructor() {
    super();
    this.CommitInterView = this.CommitInterView.bind(this);
  }

  componentDidMount () {
    this.props.dispatch(
      GetQuestionsAsync('q')
    )
  }

  componentDidUpdate(){

  }

  CommitInterView() {
    this.props.dispatch(ToastShow('提交面试'));
  }

  render() {
    return (
      <div className={styles.question}>
        <Question QuestionIns={this.props.question}  />
        <div className={styles['commit_button']}>
          <button onClick={this.CommitInterView}>完成此次InterView问答</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    question: state.question.question
  }
}
export default connect(mapStateToProps)(QuestionContainer);

