import React from 'react';
import { Link } from 'react-router-dom';
import './loginContainer.css'
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="login-Container">
                <div className="form-block">
                    <div className="mb-4">
                        <h3>Sign In to <strong>Budget Tool</strong></h3>
                        <p className="mb-4">Login or create an account below.</p>
                    </div>
                    <Form controlid="loginForm">
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control id="loginEmail" autoComplete="off" type="email" placeholder="Enter email" />
                                </Col>
                                <Col>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control autoComplete="off" id="loginPassword" type="password" placeholder="Password" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }}>
                                    <div id="errorMessage"></div>
                                    <Link to="/signup">No Account? Signup Here</Link>
                                </Col>
                            </Row>
                            <Button className="btn-dark" onClick={() => this.props.handleClick()}>Submit</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

export default LoginContainer
