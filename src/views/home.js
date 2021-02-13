import React from 'react';
import firebase from "../firebase";
import { connect } from 'react-redux';
// CSS
import '../views/home.css';
// Components
import Header from '../components/header';
import Footer from '../components/footer';
import LoginContainer from '../components/loginContainer';
// Actions
import { logIn } from '../redux/actions';

const HomePage = (props) => {

    function _loginIn() {
        let emailValue = document.getElementById('loginEmail').value;
        let passwordValue = document.getElementById('loginPassword').value;
        let errorMessageBox = document.getElementById('errorMessage');
        firebase
        .auth()
        .signInWithEmailAndPassword(emailValue, passwordValue)
        .then(function(){
        //LogIn
        this.props.logInClick();
        console.log(this.props.loggedIn);
        })
        .catch(function(error) {
        errorMessageBox.innerHTML = error.message;
        console.log(error.message);
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);