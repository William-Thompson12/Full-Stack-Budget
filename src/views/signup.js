import React from 'react';
import firebase from "../firebase";
// CSS
import '../views/signup.css';
// Components
import Header from '../components/header';
import Footer from '../components/footer';
import SignupContainer from '../components/signupContainer';

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
            //signin
        })
        .catch(function(error) {
            errorMessageBox.innerHTML = error.message;
        });
    };

    return (
        <div className="page">
            <Header/>
            <div className="main">
                <SignupContainer handleClick={_signUp}/>
            </div>
            <Footer/>
        </div>
    );
}

export default SignUp 