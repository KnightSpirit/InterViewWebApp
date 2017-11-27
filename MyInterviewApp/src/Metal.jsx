import React from 'react';
import styles from './metal.less';

class Metal extends React.Component {
  render() {
    return (
      <span className={styles.metal} style={{ backgroundColor: (this.props.BColor || 'black'), color: (this.props.FColor || 'white') }} >{this.props.Text}</span>
    )
  }
}

export default Metal;