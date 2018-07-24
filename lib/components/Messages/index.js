'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextMessage = require('./TextMessage');

var _TextMessage2 = _interopRequireDefault(_TextMessage);

var _darioSmall = require('./../../assets/dario-small.png');

var _darioSmall2 = _interopRequireDefault(_darioSmall);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return _react2.default.createElement(_TextMessage2.default, this.props.message);
    }
  };

  Message.prototype.render = function render() {
    var _this3 = this;

    var contentClassList = ["sc-message--content", this.props.message.author === "me" ? "sent" : "received"];
    var scLoader = _react2.default.createElement(
      _reactTransitionGroup.CSSTransition,
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
      _react2.default.createElement(
        'div',
        { className: 'loader' },
        _react2.default.createElement('span', null),
        _react2.default.createElement('span', null),
        _react2.default.createElement('span', null)
      )
    );
    return _react2.default.createElement(
      'div',
      { className: 'sc-message' },
      _react2.default.createElement(
        'div',
        { className: contentClassList.join(" ") },
        _react2.default.createElement('div', { className: 'sc-message--avatar', style: {
            backgroundImage: 'url(' + _darioSmall2.default + ')'
          } }),
        this.props.message.isLatest && scLoader,
        this.state.showMessage && this._renderMessageOfType(this.props.message.type)
      )
    );
  };

  return Message;
}(_react.Component);

exports.default = Message;
module.exports = exports['default'];