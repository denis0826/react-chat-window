import React, { Component } from 'react'
import TextMessage from './TextMessage'
import chatIconUrl from './../../assets/dario-small.png'
import update from 'immutability-helper';
import $ from 'jquery'

import { CSSTransition } from 'react-transition-group';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showType: true,
      showMessage: true,
      showAvatar: true,
      messageState: props.message,
    };
  }
  componentDidMount() {
    const { messageState } = this.state
    if(messageState.ctr >= 0){
      $("div.ctr").prev().addClass('rmv');
    }
    if(messageState.isLatest === undefined){
      this.setState({
        messageState : update(messageState, {isLatest: {$set: false}})
      })
    }else{
      this.setState({
        messageState : update(messageState, {isLatest: {$set: true}}),
        showMessage: false
      })
      setTimeout( () => {
        this.setState({showType: false});
      }, 1700);
    }
  }
  _renderMessageOfType(type) {
    switch(type) {
      case 'text':
        return <TextMessage {...this.props.message} />
    }
  }
  render () {
    const { messageState, showType, showMessage } = this.state;
    let contentClassList = [
      "sc-message--content",
      (messageState.author === "me" ? "sent" : "received")
    ];
    let scLoader = (
      <CSSTransition
        in={showType}
        timeout={300}
        unmountOnExit
        classNames="fade"
        onExited={() => {
          this.setState({
            showMessage: true,
          });
        }}
      >
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </CSSTransition>
    );
    return (
      <div className={`sc-message ${messageState.ctr !== undefined && 'ctr'}`}>
        <div className={contentClassList.join(" ")}>
          <div className="sc-message--avatar" style={{
            backgroundImage: `url(${chatIconUrl})`
          }}></div>
          { messageState.isLatest && scLoader }
          { showMessage && this._renderMessageOfType(messageState.type) }
        </div>
      </div>
    )
  }
}

export default Message