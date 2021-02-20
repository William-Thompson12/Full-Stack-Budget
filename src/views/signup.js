import React from 'react';
import firebase from "../firebase";
import { connect } from 'react-redux';
// CSS
import '../views/signup.css';
// Components
import Header from '../components/header-components/header';
import Footer from '../components/footer-components/footer';
import SignupContainer from '../components/auth/signupContainer';
// Actions
import { logIn } from '../redux/actions';
// Bootstrap 
import Col from 'react-bootstrap/Col';

const SignUp = (props) => {

    function _signUp(){
        // Get Values
        let emailValue = document.getElementById('email').value;
        let passwordValue = document.getElementById('password').value;
        let errorMessageBox = document.getElementById('errorMessage');
        let name = document.getElementById('first-name').value + document.getElementById('last-name').value;
        firebase
        .auth()
        .createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(function(){
            console.log('account made')
            .signInWithEmailAndPassword(emailValue, passwordValue)
            .then(function(){
                //LogIn
                this.props.logInClick();
                console.log(this.props.loggedIn);
            })
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
        // Translate redux dispatch into props
        logInClick: () => { dispatch(logIn()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
