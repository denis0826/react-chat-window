import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

class TextMessage extends Component {
  render (){
    console.log(this.props)
    return <div className="sc-message--text">{this.props.data.text}</div>
  }
}

export default TextMessage