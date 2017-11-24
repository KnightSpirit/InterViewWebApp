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
        bGroup = (
          <div className={toastClassNames.join(' ')}>
            {this.props.Content}
          </div>);
          break;
      default:
        classNames.push(styles.overlap);
        bGroup = (
          <div className={styles['normal_face']}>
            <div>
              {this.props.Content}
            </div>
            <div className={styles['button_group']}>
              <button>确认</button>
            </div>
          </div>
        )
    }
    
    if (!this.props.Loading) {
      classNames.push(styles.disappear);
    }
    return (
      <div className={classNames.join(' ')} >
        {bGroup}
      </div>
    );
  }
}

export default connect()(Dialog);