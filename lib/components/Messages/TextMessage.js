'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chatIcon = require('./../../assets/chat-icon.svg');

var _chatIcon2 = _interopRequireDefault(_chatIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextMessage = function (_Component) {
  _inherits(TextMessage, _Component);

  function TextMessage() {
    _classCallCheck(this, TextMessage);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TextMessage.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'sc-message--text' },
      this.props.data.text
    );
  };

  return TextMessage;
}(_react.Component);

exports.default = TextMessage;
module.exports = exports['default'];