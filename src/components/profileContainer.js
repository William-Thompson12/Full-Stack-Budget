import React from 'react';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Img
import avatar from '../img/user-1633249_640.png';

const Profile = (props) => {
    // modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // end modal
    return (
        <>
            {/* change title to Users Name */}
            <NavDropdown title={'user'} id="collasible-nav-dropdown">
                <Link to="/about">About</Link>
                {/* change onClick to Profile Pop-Up */}
                <NavDropdown.Item onClick={handleShow}>Profile</NavDropdown.Item>
                {/* change onClick to LogOut */}
                <NavDropdown.Item onClick={null}>Sign-Out</NavDropdown.Item>
            </NavDropdown>
            <img id="profile-pic" src={avatar} alt="Siloutte Profile Avatar"/>

            <Modal className="profile-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <span>
                        <img id="profile-pic" src={avatar} alt="Siloutte Profile Avatar"/>
                        <Modal.Title>Profile</Modal.Title>
                    </span>
                </Modal.Header>
                <div id="profile-info">
                   
                </div>
                <Modal.Footer>
                    <div className="profile-buttons">
                        <Button variant="danger" onClick={null}>Delete Account</Button>
                        <Button variant="success" onClick={null}>Save</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Profile