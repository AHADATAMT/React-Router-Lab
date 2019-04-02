import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import AddCandidate from './CRUD/Add'
import ViewJobDetail from './CRUD/view/ViewDetail'
import ViewJobs from './CRUD/view/Overview'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ViewJobs} />
                <Route path="/view/candidate/:id" component={ViewJobDetail} />
                <Route path="/edit/candidate/:id" component={AddCandidate} />
                <Route path="/add" component={AddCandidate} />
            </Switch>
        )
    }
}
