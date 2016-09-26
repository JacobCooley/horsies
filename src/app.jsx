import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Race from './components/race.jsx'
import Home from './components/home.jsx'

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Home} />
                <Route path='/race' component={Race} />
            </Router>
        )
    }
}

export default App