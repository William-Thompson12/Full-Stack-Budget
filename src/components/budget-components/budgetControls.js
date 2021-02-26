import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
// Bootstrap
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// Actions
import { createBudget, updateBudget, deleteBudget, createPdf, copyBudget } from '../../redux/actions';
// Components
import BudgetButton from './budgetButton';
import NewBudgetForm from './newBudgetForm';

const BudgetControls = (props) => {
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
    return (
        <>
            <Col className="budget-controls" sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }}>
                {/* Change to Button Functions and Names (Edit Button)*/}
                <BudgetButton handleClick={handleShow} buttonName={'Create Budget'}/>
                <BudgetButton handleClick={handleShow2} buttonName={'Edit Budget'}/>
                <BudgetButton handleClick={props.copyBudget} buttonName={'Create Copy'}/>
                <BudgetButton handleClick={props.deleteBudget} buttonName={'Delete Budget'}/>
                <BudgetButton handleClick={props.createPdf} buttonName={'Create PDF'}/>
            </Col>

            <Modal className="newBudget-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Enter Budget Information Below
                </Modal.Header>
                <NewBudgetForm/>
                <Modal.Footer>
                    <Row>
                        <Button variant="secondary" onClick={() => props.createBudget()}>Create New Budget</Button>
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
                        <Button variant="secondary" onClick={() => props.editBudget()}>Edit Budget</Button>
                    </Row>        
                </Modal.Footer>
            </Modal>
        </>
    );
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn,
        budgets: state.budgets
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        createBudget: () => { 
            dispatch(createBudget())
        },
        updateBudget: () => { 
            dispatch(updateBudget())
        },          
        deleteBudget: () => { 
            dispatch(deleteBudget())
        },
        createPdf: () => {
            dispatch(createPdf())
        },    
        copyBudget: () => {
            dispatch(copyBudget())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetControls);