import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

export default class ViewJobDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      candidate: {},
    };
  }

  getCandidates = async id => {
    const url = "http://localhost:3001/candidate/" + id;
    let response = fetch(url);
    response
      .then(res => res.json())
      .then(data => this.setState({ candidate: data }));

  }
  render() {
    if (this.props.location !== undefined) {
      if (this.props.location.pathname.indexOf('view/candidate')) {
        this.getCandidates(this.props.match.params.id);
        return (
          <Container>
            <Row>
              <Col sm={3}>
                <img className="w-100" src={this.state.candidate.profilePic} />
                <p> {this.state.candidate.first_name} {this.state.candidate.last_name}</p>
                <p> {this.state.candidate.lastJob} <br /> {this.state.candidate.skill}</p>
              </Col>
            </Row>
          </Container>
        )
      }
    }
    else {
      return (
        <>
          <Link to={`/view/candidate/${this.props.id}`}>View</Link>
        </>
      );
    }
  }
}
