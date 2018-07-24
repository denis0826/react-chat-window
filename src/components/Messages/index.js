import React, { Component } from 'react'
import TextMessage from './TextMessage'
import chatIconUrl from './../../assets/dario-small.png'

import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Message extends Component {
  constructor() {
    super();
    this.state = {
      showType: true,
      showMessage: true
    };
  }
  componentDidMount() {
    if(this.props.message.isLatest){
      this.setState({showMessage: false});
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
    let contentClassList = [
      "sc-message--content",
      (this.props.message.author === "me" ? "sent" : "received")
    ];
    let scLoader = (
      <CSSTransition
        in={this.state.showType}
        timeout={200}
        unmountOnExit
        classNames={{
          appear: 'my-appear',
          enter: 'my-enter',
          exit: 'my-exit',
        }}
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
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          <div className="sc-message--avatar" style={{
            backgroundImage: `url(${chatIconUrl})`
          }}></div>
          {this.props.message.isLatest && scLoader }
          {/* {this.props.message.isLatest && this.state.showMessage ? scLoader : this._renderMessageOfType(this.props.message.type)} */}
          {this.state.showMessage && this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>)
  }
}

export default Message