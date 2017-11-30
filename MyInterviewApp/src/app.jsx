import React from 'react';
import '../css/normalize.css';
import styles from './app.less';
import { connect } from 'react-redux';
import QuestionContainer from './QuestionContainer.jsx';
import { questionDict } from './helper'
import { GetQuestionDictAsync } from './action/action.js';
import Dialog from './Dialog.jsx';
import Toast from './Toast.jsx';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(GetQuestionDictAsync());
  }

  render() {
    return (
    <div className={styles.main}>
      <Toast Content={this.props.content} Duration={5} Pos="Center" />
      <QuestionContainer />
    </div>
    )
  }
}

function mapStateToProps(state = {}) {
  return {
    content: state.questionsType.content,
  }
}

export default connect(mapStateToProps)(App);
