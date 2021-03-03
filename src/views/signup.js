import React from 'react';
import firebase from "../firebase";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// CSS
import '../views/signup.css';
// Components
import Header from '../components/header-components/header';
import Footer from '../components/footer-components/footer';
import SignupContainer from '../components/auth/signupContainer';
import UserData from '../services/users.services';
// Bootstrap 
import Col from 'react-bootstrap/Col';

const SignUp = (props) => {
    const history = useHistory()
    function _signUp(){
        console.log( document.getElementById('email').value, document.getElementById('first-name').value + document.getElementById('last-name').value)
        // Get Values
        const newUser = {
            email: document.getElementById('email').value,
            name: document.getElementById('first-name').value + document.getElementById('last-name').value
        }
        let errorMessageBox = document.getElementById('errorMessage');
        let password = document.getElementById('password').value;
        firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, password)
        .then((response) => {
            const updatedUser = {
                ...newUser,
                userToken: response.user.uid
            }
            UserData.create(updatedUser);
        })
        .then(() => {
            history.push("/home")
        })
        .catch(function(error) {
            errorMessageBox.innerHTML = error.message;
        });
    };

    return (
        <div className="page">
            <Header/>
            <div className="main">
                <Col sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
                    <SignupContainer handleClick={_signUp}/>
                </Col>
            </div>
            <Footer/>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
