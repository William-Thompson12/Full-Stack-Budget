import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

class SignupContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="login-Container">
                <h3>Signup Below</h3>
                <Form>
                    <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control id="email" autoComplete="on" type="email" placeholder="Enter email" />
                        </Col>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control id="password" autoComplete="on" type="password" placeholder="Password" />
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
                    <Button className="btn-dark" onClick={() => this.props.handleClick()}>Submit</Button>
                    <div id="errorMessage"></div>
                </Form>
            </div>
        )
    }
}

export default SignupContainer