import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Update extends Component {
    render() {
        return (
            <>
                <Link to={`/edit/candidate/${this.props.id}`}>Update</Link>
            </>
        )
    }
}
