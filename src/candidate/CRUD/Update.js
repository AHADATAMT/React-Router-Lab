import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const url = "http://localhost:3001/candidate";

export default class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidate: {
                first_name: '',
                last_name: '',
                lastJob: '',
                skill: '',
                profilePic: '',
                email: '',
            }
        }
    }

    getCandidates = async () => {
        let { id } = this.props.match.params;
        const url = "http://localhost:3001/candidate/" + id;
        fetch(url).then(res => res.json())
            .then(data => {
                console.log(data); this.setState({ candidate: data })
            });
    };

    componentDidMount() {
        this.getCandidates();
    }

    putCandidates = async () => {
        let { id } = this.props.match.params;
        const url = "http://localhost:3001/candidate/" + id;
        let response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',
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
        if (this.props.location !== undefined) {
            if (this.props.location.pathname.indexOf('edit/candidate')) {
                return (
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <Form className="mt-5">
                                    <Row from>
                                        <FormGroup>
                                            <Input type="text" required name="first_name" maxlength="15" minlength="3" id="first_name" placeholder="First name" value={this.state.candidate.first_name} onChange={this.onChangeValue} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" required name="last_name" maxlength="15" minlength="3" id="last_name" placeholder="Last name" value={this.state.candidate.last_name} onChange={this.onChangeValue} />
                                        </FormGroup>
                                    </Row>
                                    <Row from>
                                        <FormGroup>
                                            <Input type="email" required name="email" id="email" placeholder="Email" value={this.state.candidate.email} onChange={this.onChangeValue} />
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
                                    <Button onClick={this.putCandidates}>Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        }
        else {
            return (
                <>

                </>
            );
        }

    }
}
