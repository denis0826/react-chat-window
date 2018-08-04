import React, { Component } from 'react';
import Message from './Messages'

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list : [...props.messages],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
    if(prevProps.messages.length !== this.props.messages.length){
      this.setState({
        list: [...this.props.messages],
      })
    }
  }

  render () {
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el}>
        {this.state.list.map((message, i, arr) => {
          return <Message message={message}  key={i} />
        })}
      </div>)
  }
}

export default MessageList