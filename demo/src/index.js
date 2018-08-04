import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from '../../src'
import uuidv4 from 'uuid/v4'

import messageHistory from './messageHistory';
import TestArea from './TestArea';
import Header from './Header';
import Footer from './Footer';
import monsterImgUrl from "./../assets/monster.png";
import darioLogo from '../../src/assets/dario-small.png';
import './../assets/styles'



class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory,
      newMessagesCount: 0,
      isOpen: false,
      ctr:0,
    };
  }
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message],
      ctr: 0
    })
  }
  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1
      this.setState((prevState, props) => {
        return {
          newMessagesCount: newMessagesCount,
          messageList: [...this.state.messageList, {
            type: 'text',
            author: 'them',
            data: { text },
            isLatest: false,
            ctr: this.state.ctr || 0,
            uuid: uuidv4()
          }],
          ctr: prevState.ctr + 1
        }
      })
    }
  }
  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    })
  }

  render() {
    return <div>
      <Header />
      <TestArea
        onMessage={this._sendMessage.bind(this)}
      />
      <Launcher
        agentProfile={{
          teamName: 'Header ',
          subName: 'Subtittle',
          imageUrl: darioLogo
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        newMessagesCount={this.state.newMessagesCount}
        handleClick={this._handleClick.bind(this)}
        isOpen={this.state.isOpen}
      />
      <img className="demo-monster-img" src={monsterImgUrl} />
      <Footer />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
