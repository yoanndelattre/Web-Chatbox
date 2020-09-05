import React, {Component, createRef, Fragment} from 'react';
import './App.css';
import './animations.css';
import HomeLogo from './img/home.png';
import CookieAlert from './Cookie-Alert';

import Formulaire from './components/Formulaire';
import Message from './components/Message';

// Firebase
import base, {auth} from './conf-firebase';

// Animations
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo,
  }

  messagesRef = createRef()

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages',
    });
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage = (message) => {
    const messages = {...this.state.messages};

    messages[`message-${Date.now()}`] = message;
    Object
        .keys(messages)
        .slice(0, -10)
        .forEach((key) => {
          messages[key] = null;
        });

    this.setState({messages});
  }

  isUser = (pseudo) => pseudo === this.state.pseudo

  signOut = () => {
    auth.signOut();
  }

  render() {
    const messages = Object
        .keys(this.state.messages)
        .map((key) => (
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
        ));

    return (
      <Fragment>
        <CookieAlert/>
        <div className='box'>
          <div className="border">
            <button className='home' onClick={this.signOut}><a href='/'><img src={HomeLogo} alt="home-button"/></a></button>
            <a className='report-problem' target="blank" href="https://github.com/yoanndelattre/Web-Chatbox/issues">Report a Problem</a>
            <div className='messages' ref={this.messagesRef}>
              <TransitionGroup className='message'>
                { messages }
              </TransitionGroup>
            </div>
            <Formulaire length={140} pseudo={this.state.pseudo} addMessage={this.addMessage} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
