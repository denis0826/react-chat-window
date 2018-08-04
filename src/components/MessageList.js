import React, { Component } from 'react';
import Message from './Messages'
import update from 'immutability-helper';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list : [...props.messages],
      list2 : []
    };
  }

  componentWillReceiveProps(nextProps){
    
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

  }

  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
    if(prevProps.messages.length !== this.props.messages.length){
      // this.setState({
      //   list : update(this.state.list, {14: {isLatest: {$set: 'falsdadae'}}})
      // })
      this.setState({
        list: [...this.props.messages],
      })

      
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
  }

  render () {
    // console.log(this.state.list)
    
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el}>
        {this.state.list.map((message, i, arr) => {
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
          return <Message message={message}  key={i} />
        })}
      </div>)
  }
}

export default MessageList