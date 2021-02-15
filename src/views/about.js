import React from 'react';
// CSS
import '../views/about.css';
// Components
import Header from '../components/header-components/header';
import Footer from '../components/footer-components/footer';

const About = (props) => {
    return (
        <div className="page">
            <Header/>
            <div className="main">
            ABOUT PAGE
            </div>
            <Footer/>
        </div>
    );
}

export default About 