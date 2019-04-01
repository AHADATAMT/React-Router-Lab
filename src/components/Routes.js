import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import AddCandidate from './AddCandidate'
import ViewJobDetail from './ViewJobDetail'
import ViewJobs from './ViewJobs'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ViewJobs} />
                <Route path="/view/candidate/:id" component={ViewJobDetail} />
                <Route path="/add/" component={AddCandidate} />
            </Switch>
        )
    }
}
