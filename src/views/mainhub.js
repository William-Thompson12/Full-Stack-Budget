import React from 'react';
// CSS
import '../views/mainhub.css';
// Components
import Header from '../components/header';
import Footer from '../components/footer';
import ActionContainer from '../components/actionContainer';

const MainHub = (props) => {
    return (
        <div className="page">
            <Header profile={true}/>
            <div className="main">
            <ActionContainer/>
            </div>
            <Footer/>
        </div>
    );
}

export default MainHub 