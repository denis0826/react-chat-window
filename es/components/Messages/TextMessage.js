function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

var TextMessage = function (_Component) {
  _inherits(TextMessage, _Component);

  function TextMessage() {
    _classCallCheck(this, TextMessage);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TextMessage.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'sc-message--text' },
      this.props.data.text
    );
  };

  return TextMessage;
}(Component);

export default TextMessage;