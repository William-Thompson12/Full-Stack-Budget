import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <Navbar>
                <Link to="/">
                    <Navbar.Brand >Bugdet Tool</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <NavDropdown title="More" id="collasible-nav-dropdown">
                    <Link to="/about">About</Link>
                    <NavDropdown.Item href="https://github.com/William-Thompson12/Full-Stack-Bugdet">GitHub</NavDropdown.Item>
                    <NavDropdown.Item href="www.linkedin.com/in/william-thompson12">Linkedin</NavDropdown.Item>
                </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header