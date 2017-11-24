import React from 'react';
import styles from './Toast.less';
import { connect } from 'react-redux';
import { ToastHide } from './action/action';

class Toast extends React.Component {
  constructor() {
    super();
    this.timer = '';
    this.Pos = {
      Center: 'center',
      Bottom: 'bottom'
    }
  }


  componentDidMount() {
    if (this.props.Duration){
      this.timer = setTimeout(() => {
        this.props.dispatch(ToastHide());
      }, this.props.Duration * 1000);
    }
  }

  componentWillUnmount() {
    if (this.props.Duration) {
      clearInterval(this.timer);
    }
  }

  render () {
    if (!this.props.Show) return '';
    let style, classNames;
    classNames = [styles['toast']];
    if (this.props.Pos) classNames.push(styles[this.Pos[this.props.Pos]])
    else {
      classNames.push(styles[this.Pos['Bottom']]);
    }
    style = {
      animationDuration: `${this.props.Duration || 3}s`
    }
    if (this.props.timeout) {
      classNames = [styles['toast_hide']];
      style = {
        animationDuration: `.3s`
      }
    } 


    return (
      <div className={classNames.join(' ')} style={style}>
        {this.props.Content || '加载中'}
      </div>
    ) 
  }
}

function mapStateToProps(state) {
  return {
    timeout: state.questionsType.timeout
  }
}

export default connect(mapStateToProps)(Toast);