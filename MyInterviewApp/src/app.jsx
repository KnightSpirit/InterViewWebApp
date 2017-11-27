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
      <Toast Content={this.props.content} Duration={5} Show={this.props.show} Pos="Center" />
      <QuestionContainer />
    </div>
    )
  }
}

function mapStateToProps(state = {}) {
  return {
    content: state.questionsType.content,
    show: state.questionsType.show
  }
}

export default connect(mapStateToProps)(App);
