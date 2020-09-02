import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import CookieAlert from '../Cookie-Alert'

class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    render () {

        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }

        return (
            <Fragment>
                <CookieAlert/>
                <div className='container'>
                    <h1 className="title">Chatbox - Conversation</h1>
                    <div className='connexionBox'>
                        <a className='report-problem' target="blank" href="https://github.com/yoanndelattre/Web-Chatbox/issues">Report a Problem</a>
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Connexion
