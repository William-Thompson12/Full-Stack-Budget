import React from 'react';
import firebase from "../firebase";
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
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
import Row from 'react-bootstrap/Row'
import { useHistory } from 'react-router-dom';

const HomePage = (props) => {
    const history = useHistory()
    function _loginIn() {
        let emailValue = document.getElementById('loginEmail').value;
        let passwordValue = document.getElementById('loginPassword').value;
        let errorMessageBox = document.getElementById('errorMessage');
        firebase
        .auth()
        .signInWithEmailAndPassword(emailValue, passwordValue)
        .then((response) => {
            Cookies.set('userToken', response.user.uid)
            props.logInClick()
        })
        .then(() => {
            history.push("/mainHub");
        })
        .catch(function(error) {
            errorMessageBox.innerHTML = error.message;
            console.log(error);
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
                    <Col className="main-container" sm={12} md={12} lg={4}>
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
        loggedIn: state.loggedIn,
        user: state.user,
        budgets: state.budgets
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        logInClick: () => { dispatch(logIn()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);