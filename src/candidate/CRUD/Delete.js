import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Delete extends Component {

    deleteJobCandidate = async () => {
        const url = "http://localhost:3001/candidate/";
        console.log()
        await fetch(url + this.props.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
            .then(res => this.props.getCandidates()) // OR res.json()
    }
    render() {
        return (
            <>
                <Link to={`/`} onClick={this.deleteJobCandidate}>Delete</Link>
            </>
        )
    }
}
