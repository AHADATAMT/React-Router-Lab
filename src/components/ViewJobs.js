import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const url = "http://localhost:3001/candidate";


export default class ViewJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      newCandidate: {
        id: null,
        first_name: ''
      }
    };
  }

  getCandidates = async () => {

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
    return (
      <Container>
        <Row>
          <Link to="/add">Add Candidate</Link>
        </Row>
        <Row>
          {this.state.candidates.map(candidate =>
            <Col sm={3}>
              <img className="w-100" src="https://loremflickr.com/300/300/dog" />
              <p> {candidate.first_name} <br /> {candidate.lastJob}</p>
            </Col>
          )}
        </Row>
      </Container>
    )
  }
}
