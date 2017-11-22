import React from 'react';
import styles from './board.less';
import QuestionsContainer from './QuestionContainer.jsx';
import {connect} from 'react-redux';
class QuestionBoard extends React.Component {
  render(){
    return (
      <div className={styles['question_board']}>
        <QuestionsContainer Init={this.props.Init} />
      </div>
    )
  }
}

export default connect()(QuestionBoard);