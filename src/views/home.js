import React from 'react';
// CSS
import '../views/home.css';
// Components
import Header from '../components/header';
import Footer from '../components/footer';
import LoginContainer from '../components/loginContainer';
const HomePage = (props) => {
    return (
        <div className="page">
            <Header/>
            <div className="main">
                <LoginContainer/>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage 