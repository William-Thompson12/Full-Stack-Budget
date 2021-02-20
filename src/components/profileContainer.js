import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import avatar from '../img/user-1633249_640.png';
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <>
            {/* change title to Users Name */}
            <NavDropdown title={'user'} id="collasible-nav-dropdown">
                <Link to="/about">About</Link>
                {/* change onClick to Profile Pop-Up */}
                <NavDropdown.Item onClick={null}>Profile</NavDropdown.Item>
                {/* change onClick to LogOut */}
                <NavDropdown.Item onClick={null}>Sign-Out</NavDropdown.Item>
            </NavDropdown>
            <img id="profile-pic" src={avatar} alt="Siloutte Profile Avatar"/>
            </>
        )
    }
}

export default Profile