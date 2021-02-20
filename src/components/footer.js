import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <nav className="footer text-center bg-dark">
                <div className="copyRight">
                    <p>&copy; Bugdet Tool</p>
                </div>
                <div className="footer-links">
                    <a className="nav-link active" href="https://github.com/William-Thompson12/React-Project">GitHub</a>
                    <a className="nav-link active" href="https://linkedin.com/in/william-thompson12">Linkedin</a>
                </div>
            </nav>
        )
    }
}

export default Footer