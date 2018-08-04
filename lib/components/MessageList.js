'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Messages = require('./Messages');

var _Messages2 = _interopRequireDefault(_Messages);

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageList = function (_Component) {
  _inherits(MessageList, _Component);

  function MessageList(props) {
    _classCallCheck(this, MessageList);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      list: [].concat(props.messages),
      list2: []
    };
    return _this;
  }

  MessageList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {

    // this.props.messages.map((message,i, arr) => {
    //   let current, prev = 0, next, group = 'na';
    //   current = message.author;
    //   if (i > 0) {
    //     prev = arr[i - 1];
    //     // prev = i - 1;
    //     // console.log('prev:', prev)
    //     // this.setState({
    //     //   list : update(this.state.list, {prev: {removeAvatar: {$set: true}}})
    //     // })
    //     console.log(prev)
    //   }
    //   if (i < arr.length - 1) {
    //     next = arr[i + 1];
    //   }
    //   console.log('Current: ', current)
    //   console.log("Previous: ", prev);
    //   console.log("Next: ", next);
    //   if(current === 'them' && prev.author === 'them' ){
    //     group = 'gm';
    //     this.setState({
    //       list : update(this.state.list, {1: {removeAvatar: {$set: true}}}),
    //     })
    //   }
    // })

  };

  MessageList.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
    if (prevProps.messages.length !== this.props.messages.length) {
      // this.setState({
      //   list : update(this.state.list, {14: {isLatest: {$set: 'falsdadae'}}})
      // })
      this.setState({
        list: [].concat(this.props.messages)
      });

      // this.props.messages.map((message, i, arr) => {
      //   let current, prev, next, group = 'na';
      //   current = message.author;
      //   if (i > 0) {
      //     prev = arr[i - 1].author;
      //   }
      //   if (i < arr.length - 1) {
      //     next = arr[i + 1].author;
      //   }
      //   if(current === 'them' && prev === 'them' ){
      //     group = 'gm';
      //   }
      //   if(group === 'gm'){
      //     this.setState({
      //       list: update(this.props.messages, {[2, 3]: {removeAvatar: {$set: true}}}),
      //     })
      //   }
      // })
    }
  };

  MessageList.prototype.render = function render() {
    var _this2 = this;

    // console.log(this.state.list)

    return _react2.default.createElement(
      'div',
      { className: 'sc-message-list', ref: function ref(el) {
          return _this2.scrollList = el;
        } },
      this.state.list.map(function (message, i, arr) {
        // let current, prev, next, group = 'na';
        // current = message.author;
        // if (i > 0) {
        //   prev = arr[i - 1].author;
        // }
        // if (i < arr.length - 1) {
        //   next = arr[i + 1].author;
        // }
        // // console.log('Current: ', current)
        // // console.log("Previous: ", prev);
        // // console.log("Next: ", next);
        // if(current === 'them' && prev === 'them' ){
        //   group = 'gm';
        // }
        // if(group === 'gm'){
        //   this.setState({
        //     list2 : update(this.state.list, {[i - 2]: {removeAvatar: {$set: true}}}),
        //   })
        // }
        return _react2.default.createElement(_Messages2.default, { message: message, key: i });
      })
    );
  };

  return MessageList;
}(_react.Component);

exports.default = MessageList;
module.exports = exports['default'];