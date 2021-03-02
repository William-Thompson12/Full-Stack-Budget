import React from 'react';
import { useState } from 'react';
import CanvasJSReact from "../canvasjs-3.2.9/canvasjs.react"
import { connect } from 'react-redux';
// CSS
import './budget.css';
// Bootstrap
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
// Components
import Income from './incomeContainer';
import Expense from './expenseContainer';
// Actions
import { updateBudget, setBudget } from '../../redux/actions';
import { findAllPos, findAllNeg, monthlyBudgetSaving, costRatioData, percentage} from './budgetCalculations';
// Charts
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Budget = (props) => {
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

    const costRatioCalc = costRatioData(props.budget);
    const positiveBudgets = findAllPos(props.budget);
    const negativeBudgets = findAllNeg(props.budget);
    const monthlyBudget = monthlyBudgetSaving(props.budget);
    const percentageCalc = percentage(props.budget);
    console.log( 
     props.budget,
     costRatioCalc,
     positiveBudgets,
     negativeBudgets,
     monthlyBudget,
     percentageCalc
    )

    const expenseOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", 
        title:{ text: "Breakdown Expenses" },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}$",		
            startAngle: -90,
            dataPoints: negativeBudgets
        }]
    }
    const incomeOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1",
        title:{ text: "Breakdown Income" },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}$",		
            startAngle: -90,
            dataPoints: positiveBudgets
        }]
    }
    const projectedIncome = {
        animationEnabled: true,
        exportEnabled: true,
        colorSet: "colorSet1",
        title: { text: "Monthly Projected" },
        axisX: { valueFormatString: "MMMM" },
        axisY: { prefix: "$" },
        toolTip: { shared: true },
        legend: { cursor: "pointer", verticalAlign: "top" },
        data: [{
            type: "column",
            name: "Expected Income",
            showInLegend: true,
            xValueFormatString: "MMMM YYYY",
            yValueFormatString: "$#,##0",
            dataPoints: monthlyBudget.income
        },{
            type: "line",
            name: "Expected Expenses",
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: monthlyBudgetSaving.expense
        },{
            type: "area",
            name: "Savings",
            markerBorderColor: "white",
            markerBorderThickness: 2,
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: monthlyBudgetSaving.savings
        }]
    }
    const costRatio = {
        animationEnabled: true,
        title: { text: "Percentage of Income Spent"},
        subtitles: [{
            text: `%${percentageCalc} Spent`,
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "$#,##0",
            dataPoints: costRatioCalc
        }]
    }

    // function createNewIncome() {
    //     const updatedBudget = [...props.budget.income]
    //     const incomeName = document.getElementById('incomeName').value;
    //     const incomeAmount = document.getElementById('incomeAincomeAmount').value;
    //     const incomeTimes = document.getElementById('incomeTimes').value;
    //     const id = props.activeBudget
    //     const newIncome = {
    //         name: incomeName,
    //         amount: incomeAmount,
    //         times: incomeTimes
    //     }
    //     updatedBudget.income = [newIncome]
    //     updateBudget(id, updatedBudget);
    // }
    // function createNewExpense() {
    //     const updatedBudget = [...props.budget.expense]
    //     const expenseName = document.getElementById('expenseName').value;
    //     const expenseAmount = document.getElementById('expenseAincomeAmount').value;
    //     const expenseTimes = document.getElementById('expenseTimes').value;
    //     const id = props.activeBudget
    //     const newExpense = {
    //         id: 
    //         name: expenseName,
    //         amount: expenseAmount,
    //         times: expenseTimes
    //     }
    //     updatedBudget.expense = [newExpense]
    //     updateBudget(id, updatedBudget);
    // }
    // function deleteCurrentBudget() {
    //     const id = props.activeBudget
    //     deleteBudget(id);
    // }

    return (
        <>
            <Tab.Pane eventKey={props.tabKey} className="budget">
                <Row>
                    <h1>{props.budget.name}</h1>
                </Row>
                <Row>
                    <Col sm={{ span: 6, offset: 0 }} md={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }}>
                        <p>{props.budget.description}</p>
                    </Col>
                    <Col sm={{ span: 2, offset: 2 }} md={{ span: 2, offset: 6 }} lg={{ span: 2, offset: 6 }}>
                        <p>Last Edit: {props.budget.updatedAt}</p>
                    </Col>
                </Row>
                <Row  className="graph-container">
                    <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                        <Row>
                        <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                                <div className="projectedIncome-container">
                                    <CanvasJSChart options = {projectedIncome} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 8, offset: 2 }}>
                                <div className="incomeGraph-container">
                                    <CanvasJSChart options = {costRatio} />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                                <div className="incomeGraph-container">
                                    <CanvasJSChart options = {incomeOptions} />
                                </div>
                            </Col>
                            <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                                <div className="expenseGraph-container">
                                    <CanvasJSChart options = {expenseOptions} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="details-container">
                    <Col sm={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                        <div className="income-container">
                            <h1>Incomes:</h1>
                            <Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
                                <OverlayTrigger key='left' placement='left' overlay={
                                    <Tooltip id={`tooltip-left`}>Add Income</Tooltip>}>
                                        <Button variant="success" onClick={handleShow}>+</Button>
                                </OverlayTrigger>
                            </Col>
                            <br></br>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Amount:</th>
                                    <th># Per Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {props.budget.income.map((income,index) => {
                                    return <Income key={index} incomeData={income} index={index}/>
                                })}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col sm={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                        <div className="expenses-container">
                            <h1>Expenses:</h1>
                            <Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
                                <OverlayTrigger key='right' placement='right' overlay={
                                    <Tooltip id={`tooltip-right`}>Add Expense</Tooltip>}>
                                        <Button variant="danger" onClick={handleShow2}>-</Button>
                                </OverlayTrigger>
                            </Col>
                            <br></br>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Amount:</th>
                                    <th># Per Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {props.budget.expense.map((expense,index)=> {
                                    return <Expense key={index} expenseData={expense} index={index}/>
                                })}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Tab.Pane>
                            
            {/* Modals */}
            <Modal className="newIncome-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Enter Income Information Below
                </Modal.Header>
                    <Form controlid="income-form">
                        <Form.Group>
                            <Row>
                                <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 3, offset: 0 }}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control id="incomeName" autoComplete="off" type="text" placeholder="Enter email" />
                                </Col>
                                <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 3, offset: 0 }}>
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control autoComplete="off" id="incomeAmount" type="text" placeholder="20.00" />
                                </Col>
                                <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 3, offset: 0 }}>
                                    <Form.Label>Times Per Month</Form.Label>
                                    <Form.Control id="perMonth" autoComplete="on" type="" placeholder="3" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                <Modal.Footer>
                    <Row>
                        <Button variant="secondary" onClick={null}>Create New Income</Button>
                    </Row>        
                </Modal.Footer>
            </Modal>

            <Modal className="newExpense-modal" show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    Enter Expense Information Below
                </Modal.Header>
                    <Form controlid="expense-form">
                        <Form.Group>
                            <Row>
                                <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 3, offset: 0 }}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control id="expenseName" autoComplete="off" type="text" placeholder="Enter email" />
                                </Col>
                                <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 3, offset: 0 }}>
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control autoComplete="off" id="expenseAmount" type="text" placeholder="20.00" />
                                </Col>
                                <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 3, offset: 0 }}>
                                    <Form.Label>Times Per Month</Form.Label>
                                    <Form.Control id="perMonth" autoComplete="on" type="" placeholder="3" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                <Modal.Footer>
                    <Row>
                        <Button variant="secondary" onClick={null}>Create New Expense</Button>
                    </Row>        
                </Modal.Footer>
            </Modal>
        </>
    );
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn,
        user: state.user,
        activeBudget: state.activeBudget
        }
}
function mapDispatchToProps(dispatch) {
    return {
        updateBudget: (id, data) => { 
            dispatch(updateBudget(id, data))
        },
        setBudget: (budget) => {
            dispatch(setBudget(budget))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget);