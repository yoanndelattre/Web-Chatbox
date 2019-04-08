import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ goToChat: true })
    }

    render () {

        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }

        return (
            <div className='container'>
                <h1 className="title">Chatbox - Conversation</h1>
                <div className='connexionBox'>
                    <a className='report-problem' target="blank" href="https://github.com/yoanndelattre/Web-Chatbox/issues">Report a Problem</a>
                    <div className="border">
                        <form className='connexion' onSubmit={this.handleSubmit}>
                            <input
                                value={this.state.pseudo}
                                onChange={this.handleChange}
                                placeholder='Pseudo'
                                type='text'
                                required 
                            />
                            <button type='submit'>GO</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Connexion
