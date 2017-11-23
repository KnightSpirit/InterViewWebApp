import React from 'react';
import '../css/normalize.css';
import styles from './app.less';
import { connect } from 'react-redux';
import QuestionContainer from './QuestionContainer.jsx';
import { questionDict } from './helper'
import { GetQuestionDictAsync } from './action/action.js';
import Dialog from './Dialog.jsx';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(GetQuestionDictAsync());
  }

  render() {
    return (
    <div className={styles.main}>
      <Dialog Show={this.props.show || this.props.init} Content={this.props.content} DialogType='toast' />
      <QuestionContainer Init={this.props.init} />
    </div>
    )
  }
}

function mapStateToProps(state = {}) {
  return {
    init: state.questionsType.init || true,
    content: state.question.content,
    show: state.question.dialogShow
  }
}

export default connect(mapStateToProps)(App);
