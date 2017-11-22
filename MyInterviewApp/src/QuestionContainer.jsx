import React from 'react';
import { connect } from 'react-redux';
import { GetQuestionsAsync, GetQuestions } from './action/action.js';
import styles from './Question.less';
import Question from './Question.jsx';
class QuestionContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount () {
    this.props.dispatch(
      GetQuestionsAsync('q')
    )
  }

  componentDidUpdate(){

  }

  render() {
    let q = !this.props.Init? '': <Question QuestionIns={this.props.question}  />;
    let postingTip = this.props.posting? <span>提交中</span>: '';
    return (
      <div className={styles.question}>
        {postingTip}
        {q}
        <div className={styles['commit_button']}>
          <button>完成此次InterView问答</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    question: state.question.question,
    posting: state.question.posting,

  }
}
export default connect(mapStateToProps)(QuestionContainer);

