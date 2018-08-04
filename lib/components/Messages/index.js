'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextMessage = require('./TextMessage');

var _TextMessage2 = _interopRequireDefault(_TextMessage);

var _darioSmall = require('./../../assets/dario-small.png');

var _darioSmall2 = _interopRequireDefault(_darioSmall);

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      (0, _jquery2.default)("div.ctr").prev().addClass('rmv');
    }
    if (messageState.isLatest === undefined) {
      this.setState({
        messageState: (0, _immutabilityHelper2.default)(messageState, { isLatest: { $set: false } })
      });
    } else {
      this.setState({
        messageState: (0, _immutabilityHelper2.default)(messageState, { isLatest: { $set: true } }),
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
        return _react2.default.createElement(_TextMessage2.default, this.props.message);
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
    var scLoader = _react2.default.createElement(
      _reactTransitionGroup.CSSTransition,
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
      { className: 'sc-message ' + (messageState.ctr !== undefined && 'ctr') },
      _react2.default.createElement(
        'div',
        { className: contentClassList.join(" ") },
        _react2.default.createElement('div', { className: 'sc-message--avatar', style: {
            backgroundImage: 'url(' + _darioSmall2.default + ')'
          } }),
        messageState.isLatest && scLoader,
        showMessage && this._renderMessageOfType(messageState.type)
      )
    );
  };

  return Message;
}(_react.Component);

exports.default = Message;
module.exports = exports['default'];