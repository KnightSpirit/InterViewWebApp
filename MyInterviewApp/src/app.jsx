import React from 'react';
import '../css/normalize.css';
import styles from './app.less';
import { connect } from 'react-redux';
import QuestionBoard from './QuestionBoard.jsx';
import { questionDict } from './helper'
import { GetQuestionDictAsync } from './action/action.js';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(GetQuestionDictAsync());
  }

  render() {
    return (
    <div className={styles.main}>
      <QuestionBoard Init={this.props.init} />
    </div>
    )
  }
}

function mapStateToProps(state = {}) {
  return {
    init: state.questionsType.init || true
  }
}

export default connect(mapStateToProps)(App);
