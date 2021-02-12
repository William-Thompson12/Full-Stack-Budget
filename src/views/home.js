import React from 'react';
import firebase from "../firebase";
// CSS
import '../views/home.css';
// Components
import Header from '../components/header';
import Footer from '../components/footer';
import LoginContainer from '../components/loginContainer';

const HomePage = (props) => {

    function _loginIn() {
        let emailValue = document.getElementById('loginEmail').value;
        let passwordValue = document.getElementById('loginPassword').value;
        let errorMessageBox = document.getElementById('errorMessage');
        firebase
        .auth()
        .signInWithEmailAndPassword(emailValue, passwordValue)
        .then(function(){
        //signin
        console.log('logged in')
        })
        .catch(function(error) {
        errorMessageBox.innerHTML = error.message;
        console.log(error.message)
        });
    }

    return (
        <div className="page">
            <Header/>
            <div className="main">
                <LoginContainer handleClick={_loginIn}/>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage 