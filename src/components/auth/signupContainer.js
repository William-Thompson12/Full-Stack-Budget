import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class SignupContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="signIn-Container">
                <div className="form-block">
                    <div className="mb-4">
                        <h3>Sign Up Below</h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                    </div>
                    <Form controlid="signInForm">
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control id="email" autoComplete="off" type="email" placeholder="Enter email" />
                                </Col>
                                <Col>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control autoComplete="off" id="password" type="password" placeholder="Password" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control id="first-name" autoComplete="on" type="text" placeholder="First Name" />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control id="last-name" autoComplete="on" type="text" placeholder="Last Name" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <div id="errorMessage"></div>
                        <Form.Group>
                            <Button className="btn-dark" onClick={() => this.props.handleClick()}>Submit</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

export default SignupContainer