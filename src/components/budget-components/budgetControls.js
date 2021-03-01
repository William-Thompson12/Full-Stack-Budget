import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
// Bootstrap
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// Actions
import { createBudget, updateBudget, deleteBudget } from '../../redux/actions';
// Components
import BudgetButton from './budgetButton';
import NewBudgetForm from './newBudgetForm';
import BudgetData from '../../services/budgets.services'

const BudgetControls = (props) => {
    const user = props.user
    // modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // end modal
    // modal2
    const [show2, setShow2] = useState(false);
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);
    // end modal2
    // modal3
    const [show3, setShow3] = useState(false);
    const handleShow3 = () => setShow3(true);
    const handleClose3 = () => setShow3(false);
    // end modal3

    function createNewBudget() {
        const budgetName = document.getElementById('budget-name').value;
        const budgetDescription = document.getElementById('budget-description').value;
        const newBudget = {
            name: budgetName,
            description: budgetDescription,
            userToken: user.userToken
        }
        createBudget(newBudget);
    }
    function editCurrentBudget() {
        const budgetName = document.getElementById('budget-name').value;
        const budgetDescription = document.getElementById('budget-description').value;
        const id = props.activeBudget
        const newBudget = {
            name: budgetName,
            description: budgetDescription,
            userToken: user.userToken
        }
        updateBudget(id, newBudget);
    }
    function deleteCurrentBudget() {
        const id = props.activeBudget
        deleteBudget(id);
    }

    return (
        <>
            <Col className="budget-controls" sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }}>
                {/* Change to Button Functions and Names (Edit Button)*/}
                <BudgetButton handleClick={handleShow} buttonName={'Create Budget'}/>
                <BudgetButton handleClick={handleShow2} buttonName={'Edit Budget'}/>
                <BudgetButton handleClick={handleShow3} buttonName={'Delete Budget'}/>
            </Col>

            <Modal className="newBudget-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Enter Budget Information Below
                </Modal.Header>
                <NewBudgetForm/>
                <Modal.Footer>
                    <Row>
                        <Button variant="secondary" onClick={() => createNewBudget()}>Create New Budget</Button>
                    </Row>        
                </Modal.Footer>
            </Modal>

            <Modal className="editBudget-modal" show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    Edit Budget Information Below
                </Modal.Header>
                <NewBudgetForm/>
                <Modal.Footer>
                    <Row>
                        <Button variant="secondary" onClick={() => editCurrentBudget()}>Edit Budget</Button>
                    </Row>        
                </Modal.Footer>
            </Modal>

            <Modal className="deleteBudget-modal" show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    Are you Sure? - Once you delete, it can't be undone.
                </Modal.Header>
                <Modal.Footer>
                    <Row>
                        <Button variant="danger" onClick={() => deleteCurrentBudget()}>Delete Budget</Button>
                    </Row>        
                </Modal.Footer>
            </Modal>
        </>
    );
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn,
        budgets: state.budgets,
        user: state.user,
        activeBudget: state.activeBudget
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        createBudget: (newBudget) => { 
            dispatch(createBudget(newBudget))
        },
        updateBudget: (id, data) => { 
            dispatch(updateBudget(id, data))
        },          
        deleteBudget: (id) => { 
            dispatch(deleteBudget(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetControls);