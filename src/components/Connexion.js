import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import CookieAlert from '../Cookie-Alert'
import {signInWithGoogle, auth} from '../conf-firebase'

class Connexion extends Component {

    state = {
        pseudo: ''
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
          this.setState({ pseudo: user.displayName })
        })
    }

    render () {

        if (this.state.pseudo) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }

        return (
            <Fragment>
                <CookieAlert/>
                <div className='container'>
                    <h1 className="title">Chatbox - Conversation</h1>
                    <div className='connexionBox'>
                        <a className='report-problem' target="blank" href="https://github.com/yoanndelattre/Web-Chatbox/issues">Report a Problem</a>
                        <GoogleButton 
                            onClick={signInWithGoogle}
                            type="light"/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Connexion
