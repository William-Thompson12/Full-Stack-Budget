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
                <Form>
                    <Form.Group controlId="formGroupMain">
                    <Row>
                        <Col>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                        </Col>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Row>
                    </Form.Group>
                </Form>
                <Link to="/signup">Don't Have an Account Signup Here</Link>
            </div>
        )
    }
}

export default LoginContainer