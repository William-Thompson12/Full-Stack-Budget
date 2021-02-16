import React from 'react';
import firebase from "../firebase";
import { connect } from 'react-redux';
// CSS
import '../views/home.css';
// Components
import Header from '../components/header-components/header';
import Footer from '../components/footer-components/footer';
import LoginContainer from '../components/auth/loginContainer';
import Article from '../components/articleContainer';
// Actions
import { logIn } from '../redux/actions';
// Bootstrap 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
            props.logInClick();
            console.log(props.loggedIn);
        })
        .then(function(){

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
                <Row>
                    <Col sm={{ span: 11, offset: 1 }} md={{ span: 11, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <Article />
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        <LoginContainer handleClick={_loginIn}/>
                    </Col>
                </Row>
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