import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const url = "http://localhost:3001/candidate";

export default class AddCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidate: {
        first_name: '',
        last_name: '',
        lastJob: '',
        skill: '',
        profilePic: '',
      }
    }
  }
  
  postCandidates = async () => {
    console.log(JSON.stringify(this.state.candidate));
    let response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(this.state.candidate)
    });
    console.log(response.json());
  }

  onChangeValue = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      candidate: { ...this.state.candidate, [name]: value }
    }, () => console.log(this.state.candidate));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <Form className="mt-5">
              <Row from>
                <FormGroup>
                  <Input type="text" required name="first_name" id="first_name" placeholder="First name" value={this.state.candidate.first_name} onChange={this.onChangeValue} />
                </FormGroup>
                <FormGroup>
                  <Input type="text" required name="last_name" id="last_name" placeholder="Last name" value={this.state.candidate.last_name} onChange={this.onChangeValue} />
                </FormGroup>
              </Row>
              <Row from>
                <FormGroup>
                  <Input type="text" required name="lastJob" id="lastJob" placeholder="Last job title" value={this.state.candidate.lastJob} onChange={this.onChangeValue} />
                </FormGroup>
                <FormGroup>
                  <Input type="text" required name="skill" id="skill" placeholder="Skill" value={this.state.candidate.skill} onChange={this.onChangeValue} />
                </FormGroup>
              </Row>
              <Row from>
                <FormGroup>
                  <Label for="profilePic">File</Label>
                  <Input type="file" required name="profilePic" id="profilePic" accept="image/x-png,image/gif,image/jpeg" onChange={this.onChangeValue} />
                </FormGroup>
              </Row>
              <Button onClick={this.postCandidates}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
