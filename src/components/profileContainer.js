import React from 'react';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// Img
import avatar from '../img/user-1633249_640.png';
// Actions
import { deleteUser, updateUser } from '../redux/actions';

const Profile = (props) => {
    const user = props.user
    const newUser = {}
    const history = useHistory()
    // modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // end modal
    
    function updatingUser() {
        newUser.name = document.getElementById('updateName').value;
        newUser.email = document.getElementById('updateEmail').value;
        props.updateUser(user.userToken, newUser);
    }
    function signOut() {
        history.push("/mainHub");
    }
    function deleteUser() {
        props.deleteUser(user.userToken);
        history.push("/mainHub");
    }
    return (
        <>
            {/* change title to Users Name */}
            <NavDropdown title={user.name} id="collasible-nav-dropdown">
                <Link to="/about">About</Link>
                {/* change onClick to Profile Pop-Up */}
                <NavDropdown.Item onClick={handleShow}>Profile</NavDropdown.Item>
                {/* change onClick to LogOut */}
                <NavDropdown.Item onClick={() => signOut}>Sign-Out</NavDropdown.Item>
            </NavDropdown>
            <img id="profile-pic" src={avatar} alt="Siloutte Profile Avatar"/>

            <Modal className="profile-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <span>
                        <img id="profile-pic" src={avatar} alt="Siloutte Profile Avatar"/>
                        <Modal.Title>Profile</Modal.Title>
                        <Form>
                            <Form.Group controlId="updateEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder={user.email} />
                            </Form.Group>
                            <Form.Group controlId="updateName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder={user.name} />
                            </Form.Group>
                        </Form>
                    </span>
                </Modal.Header>
                <div id="profile-info">
                   
                </div>
                <Modal.Footer>
                    <div className="profile-buttons">
                        <Button variant="danger" onClick={() => deleteUser()}>Delete Account</Button>
                        <Button variant="success" onClick={() => updatingUser()}>Save</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateUser: (id, userI) => {
            dispatch(updateUser(id, userI))
        },
        deleteUser: (id) => {
            dispatch(deleteUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);