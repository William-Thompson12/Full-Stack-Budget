import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="login-Container">
                <h3>Login Below</h3>
                <Form controlid="loginForm">
                    <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control id="loginEmail" autoComplete="off" type="email" placeholder="Enter email" />
                        </Col>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control autoComplete="off" id="loginPassword" type="password" placeholder="Password" />
                        </Col>
                    </Row>
                    </Form.Group>
                    <Button className="btn-dark" onClick={() => this.props.handleClick()}>Submit</Button>
                    <div id="errorMessage"></div>
                    <Link to="/signup">Don't Have an Account Signup Here</Link>
                </Form>
            </div>
        )
    }
}

export default LoginContainer