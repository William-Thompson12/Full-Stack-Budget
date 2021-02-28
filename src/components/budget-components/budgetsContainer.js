import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
// Bootstrap
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';
// Components
import RenderedBudgets from './renderedBudgets';
import NewBudgetForm from './newBudgetForm';
// Actions
import { createBudget, setBudget } from '../../redux/actions';

const budgetInfo = {
    name: "William Thompson",
    email: "testmail@mail.com",
    budgets: [
        {
            name: "example",
            expense: [
                {
                    name: 'Monthly Rent',
                    amount: 300.00,
                    times: 1
                }
            ],
            income: [
                {
                    name: 'Monthly Pay',
                    amount: 200.00,
                    times: 2
                }
            ],
            description: "My example budget etc...",
            lastUpdated: "02/21/2021"
        },
        {
            name: "example2",
            expense: [
                {
                    name: 'Monthly Rent',
                    amount: 300.00,
                    times: 1
                },
                {
                    name: 'Monthly Haircut',
                    amount: 20.00,
                    times: 1
                }
            ],
            income: [
                {
                    name: 'Monthly Pay',
                    amount: 200.00,
                    times: 2
                },
                {
                    name: 'Monthly Allowance',
                    amount: 200.00,
                    times: 2
                }
            ],
            description: "My 2nd example budget etc...",
            lastUpdated: "02/21/2021"
        },
        {
            name: "example3",
            expense: [
                {
                    name: 'Monthly Rent',
                    amount: 300.00,
                    times: 1
                },
                {
                    name: 'Monthly Cut',
                    amount: 200.00,
                    times: 1
                }
            ],
            income: [
                {
                    name: 'Monthly Pay',
                    amount: 200.00,
                    times: 2
                },
                {
                    name: 'Monthly Pay',
                    amount: 200.00,
                    times: 2
                }
            ],
            description: "My 2nd example budget etc...",
            lastUpdated: "02/21/2021"
        }
    ]
}

const BudgetsContainer = (props) => {
    // modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // end modal

    const defaultRender = () => {
        return (
            <Row className="rendered-budgets">
                <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                    <div className="height">
                        <h4>Make A New Budget </h4>
                        {/* Replace with new budget function */}
                        <Button  variant="secondary" onClick={handleShow}>+</Button>
                    </div>
                </Col>
            </Row>
        )
    }
    return (
        <>
        <Nav variant="pills" className="budgets-container">
            {budgetInfo.budgets.length === 0 ? defaultRender() : budgetInfo.budgets.map((budget,index) => { return( <RenderedBudgets tabKey={`${index}`} handleClick={setBudget} budgetName={budget.name} budgetDate={null} budgetDescription={budget.description}/>)})}
        </Nav>
        {/* Modal */}
        <Modal className="newBudget-modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                Enter Budget Information Below
            </Modal.Header>
            <NewBudgetForm/>
            <Modal.Footer>
                <Row>
                    <Button variant="secondary" onClick={() => createBudget()}>Create New Budget</Button>
                </Row>        
            </Modal.Footer>
        </Modal>
        </>
    );
}

function mapStateToProps(state) {
    return {
        budgets: state.budgets
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        createBudget:() => { 
            dispatch(createBudget())
        },
        setBudget:(budget) => {
            dispatch(setBudget(budget))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsContainer);