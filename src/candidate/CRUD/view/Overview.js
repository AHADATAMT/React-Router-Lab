import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from '../Delete'
import Detail from './ViewDetail'




export default class ViewJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
    };
  }

  getCandidates = async () => {
    const url = "http://localhost:3001/candidate";
    let response = fetch(url);
    response
      .then(res => res.json())
      .then(data => this.setState({ candidates: data }));

  }
  componentDidMount() {
    this.getCandidates();
  }

  render() {
    console.log(this.state.candidates);
    if (this.state.candidates.length > 0)
      return (
        <Container>
          <Row>
            <Link to="/add">Add Candidate</Link>
          </Row>
          <Row>
            {this.state.candidates.map(candidate =>
              <Col sm={2}>
                <img className="w-100" src={candidate.profilePic} />
                <p> {candidate.first_name} <br /> {candidate.lastJob}</p>
                <p>
                  <Detail {...candidate} />
                  <Link to={`/edit/candidate/${candidate.id}`}>Update</Link>
                  <Delete {...candidate} getCandidates={this.getCandidates} />
                </p>
              </Col>
            )}
          </Row>
        </Container>
      )
    else {
      return <h1>Loading. . .</h1>
    }
  }
}
