import React from 'react';
import styles from './Button.less';

export default class Button extends React.Component {
  render() {
    let defaultButtonStyle = this.props.BtnType || 'default';
    return (
      <button className={styles[defaultButtonStyle]}>
        {this.props.Text}
      </button>
    )
  }
}