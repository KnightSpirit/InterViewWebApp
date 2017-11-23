import React from 'react';
import { connect } from 'react-redux';
import styles from './Dialog.less';

class Dialog extends React.Component {
  render() {
    let classNames = [styles['dialog_p']];
    if (!this.props.Show) {
      classNames.push(styles['hide'])
    }
    let bGroup;
    switch(this.props.DialogType) {
      case 'okcancel':
      case 'toast':
        let toastClassNames = [styles.toast];
        if (!this.props.Loading) {
          toastClassNames.push(styles.disappear);
        }
        bGroup = (
          <div class={toastClassNames.join(' ')}>
            {this.props.content}
          </div>);
          break;
      default:
        classNames.push(styles.overlap);
        bGroup = (
          <div className={styles['normal_face']}>
            <div>
              {this.props.content}
            </div>
            <div className={styles['button_group']}>
              <button>确认</button>
            </div>
          </div>
        )
    }
    return (
      <div className={classNames.join(' ')} >
        {bGroup}
      </div>
    );
  }
}

export default connect()(Dialog);