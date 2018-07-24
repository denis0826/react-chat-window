import React, { Component } from 'react'
import TextMessage from './TextMessage'
import chatIconUrl from './../../assets/dario-small.png'


class Message extends Component {

  _renderMessageOfType(type) {
    switch(type) {
      case 'text':
        return <TextMessage {...this.props.message} />
    }
  }
  render () {
    let contentClassList = [
      "sc-message--content",
      (this.props.message.author === "me" ? "sent" : "received")
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="sc-message--avatar" style={{
            backgroundImage: `url(${chatIconUrl})`
          }}></div>
          {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>)
  }
}

export default Message