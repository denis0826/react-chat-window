function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import TextMessage from './TextMessage';
import chatIconUrl from './../../assets/dario-small.png';
import update from 'immutability-helper';
import $ from 'jquery';

import { CSSTransition } from 'react-transition-group';

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message(props) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      showType: true,
      showMessage: true,
      showAvatar: true,
      messageState: props.message
    };
    return _this;
  }

  Message.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var messageState = this.state.messageState;

    if (messageState.ctr >= 0) {
      $("div.ctr").prev().addClass('rmv');
    }
    if (messageState.isLatest === undefined) {
      this.setState({
        messageState: update(messageState, { isLatest: { $set: false } })
      });
    } else {
      this.setState({
        messageState: update(messageState, { isLatest: { $set: true } }),
        showMessage: false
      });
      setTimeout(function () {
        _this2.setState({ showType: false });
      }, 1700);
    }
  };

  Message.prototype._renderMessageOfType = function _renderMessageOfType(type) {
    switch (type) {
      case 'text':
        return React.createElement(TextMessage, this.props.message);
    }
  };

  Message.prototype.render = function render() {
    var _this3 = this;

    var _state = this.state,
        messageState = _state.messageState,
        showType = _state.showType,
        showMessage = _state.showMessage;

    console.log(messageState.ctr);
    var contentClassList = ["sc-message--content", messageState.author === "me" ? "sent" : "received"];
    var scLoader = React.createElement(
      CSSTransition,
      {
        'in': showType,
        timeout: 300,
        unmountOnExit: true,
        classNames: 'fade',
        onExited: function onExited() {
          _this3.setState({
            showMessage: true
          });
        }
      },
      React.createElement(
        'div',
        { className: 'loader' },
        React.createElement('span', null),
        React.createElement('span', null),
        React.createElement('span', null)
      )
    );
    return React.createElement(
      'div',
      { className: 'sc-message ' + (messageState.ctr !== undefined && 'ctr') },
      React.createElement(
        'div',
        { className: contentClassList.join(" ") },
        React.createElement('div', { className: 'sc-message--avatar', style: {
            backgroundImage: 'url(' + chatIconUrl + ')'
          } }),
        messageState.isLatest && scLoader,
        showMessage && this._renderMessageOfType(messageState.type)
      )
    );
  };

  return Message;
}(Component);

export default Message;