import React from 'react';
// CSS
import '../views/signup.css';
// Components
import Header from '../components/header';
import Footer from '../components/footer';
import SignupContainer from '../components/signupContainer';

const SignUp = (props) => {
    return (
        <div className="page">
            <Header/>
            <div className="main">
                <SignupContainer/>
            </div>
            <Footer/>
        </div>
    );
}

export default SignUp 