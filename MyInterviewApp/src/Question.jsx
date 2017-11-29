import React from 'react';
import { questionDict } from './helper';
import { connect } from 'react-redux';
import styles from './Question.less';
import Metal from './Metal.jsx';
import Button from './Button.jsx';
import AnsBoard from './AnsBoard.jsx';
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
    let { Q_Note, Q_Type, Q_Selection, Q_Id } = this.props.QuestionIns;
    let qTypeDescription = questionDict[Q_Type];
    let answerArea = Q_Type === 'select' ? null : <AnsBoard onChange={this.WriteAnswer} />;
    return (
      <div style={{ width: '98%', height:'100%', margin: '0 auto'}}>
        <h3>
          <Metal Text={Q_Type} /> 第{Q_Id + 1}题
        </h3>
        <p>{Q_Note}</p>
        <div>
          { answerArea }
        </div>
        <div>
          <Button Text="提交答案" onClick={this.PostMyAnswer} />
          <Button Text="结束此次面试测试" onClick={this.PostMyAnswer} />
        </div>
      </div>
    )
  }
}

export default connect()(Question);