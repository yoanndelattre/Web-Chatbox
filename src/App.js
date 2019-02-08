import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'

import Formulaire from './components/Formulaire'
import Message from './components/Message'

// Firebase
import base from './conf-firebase'

// Animations
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    
    messages[`message-${Date.now()}`] = message
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })

    this.setState({ messages })
  }

  isUser = pseudo => pseudo === this.state.pseudo

  render () {

    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition 
        timeout={200}
        classNames='fade'
        key={key}>
          <Message
          isUser={this.isUser}
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
          />
        </CSSTransition>
      ))

    return (
      <div className='box'>
        <a className='home' href="/"><img width='40px' src={require('./img/home.png')} alt="[HOME]"/></a>
        <a className='report-problem' href="mailto:contact@yoanndelattre.com">Report a Problem</a>
        <div className='messages' ref={this.messagesRef}>
          <TransitionGroup className='message'>
            { messages }
          </TransitionGroup>
        </div>
        <Formulaire length={140} pseudo={this.state.pseudo} addMessage={this.addMessage} />
      </div>
    )
  }
}

export default App