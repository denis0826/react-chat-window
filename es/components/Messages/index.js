function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import TextMessage from './TextMessage';
import chatIconUrl from './../../assets/dario-small.png';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      showType: true,
      showMessage: true
    };
    return _this;
  }

  Message.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this.props.message.isLatest) {
      this.setState({ showMessage: false });
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

    var contentClassList = ["sc-message--content", this.props.message.author === "me" ? "sent" : "received"];
    var scLoader = React.createElement(
      CSSTransition,
      {
        'in': this.state.showType,
        timeout: 200,
        unmountOnExit: true,
        classNames: {
          appear: 'my-appear',
          enter: 'my-enter',
          exit: 'my-exit'
        },
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
      { className: 'sc-message' },
      React.createElement(
        'div',
        { className: contentClassList.join(" ") },
        React.createElement('div', { className: 'sc-message--avatar', style: {
            backgroundImage: 'url(' + chatIconUrl + ')'
          } }),
        this.props.message.isLatest && scLoader,
        this.state.showMessage && this._renderMessageOfType(this.props.message.type)
      )
    );
  };

  return Message;
}(Component);

export default Message;