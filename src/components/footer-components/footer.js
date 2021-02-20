import React from 'react';
// CSS 
import './footer.css'
// Bootstrap 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="footer text-center">
                <Col sm={12} md={12} lg={12}>
                    <div className="copyRight">
                        <p>&copy; Bugdet Tool</p>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={12}>
                    <a href="https://github.com/William-Thompson12/Full-Stack-Bugdet">GitHub</a>-
                    <a href="www.linkedin.com/in/william-thompson12">Linkedin</a>
                </Col>
            </div>
        )
    }
}

export default Footer