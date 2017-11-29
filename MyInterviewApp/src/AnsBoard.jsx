import React from 'react';

export default class AnsBoard extends React.Component {
  render() {
    return (
      <div contentEditable="true" style={{ background: 'white', outline: 'none'}} >
      </div>
    )
  }
}