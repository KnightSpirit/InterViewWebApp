import React from 'react';
import { questionDict } from './helper';
import { connect } from 'react-redux';
import styles from './Question.less';
import Metal from './Metal.jsx';
import Button from './Button.jsx';
import AnsBoard from './AnsBoard.jsx';
import { ToastShow, PostAsAsync, ForPost, ToastHide } from './action/action';

class Question extends React.Component {
  constructor() {
    super();
    this.PostMyAnswer = this.PostMyAnswer.bind(this);
  }

  PostMyAnswer() {
    this.props.dispatch(ToastShow('提交答案中'));
    this.props.dispatch(PostAsAsync(this.props.ans));
  }
  
  render() {
    if (!this.props.QuestionIns) return '';
    let { Q_Note, Q_Type, Q_Selection, Q_Id } = this.props.QuestionIns;
    let qTypeDescription = questionDict[Q_Type];
    let answerArea = Q_Type === 'select' ? null : <AnsBoard onChange={this.WriteAnswer} />;
    return (
      <div style={{ width: '98%', height:'100%', margin: '0 auto', display:'flex', justifyContent:'space-between', flexDirection: 'column'}}>
        <h3>
          <Metal Text={Q_Type} /> 第{Q_Id + 1}题
        </h3>
        <p>{Q_Note}</p>
        { answerArea }
        <div style={{ marginTop: '.5rem'}}>
          <Button Text="提交答案" onClick={this.PostMyAnswer} />
          <Button Text="结束此次面试测试" onClick={this.PostMyAnswer} />
        </div>
      </div>
    )
  }
}

function mapSTP(state={}){
  return {
    ans: state.question.ans || ''
  }
}

export default connect(mapSTP)(Question);