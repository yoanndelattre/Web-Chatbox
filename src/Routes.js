import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import App from './App'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'

export default function MainRouter () {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Connexion} />
                <Route path='/pseudo/:pseudo' component={App} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}