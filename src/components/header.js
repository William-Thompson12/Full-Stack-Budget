import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// CSS
import './header.css'
// Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown'
import Profile from './profileContainer';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        if(this.props.profile === true) {
            return (
                <Navbar>
                    <Link to="/">
                        <Navbar.Brand >Bugdet Tool</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Profile />
                    </Navbar.Collapse>
                </Navbar>
            );
        } else {
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
}

export default Header