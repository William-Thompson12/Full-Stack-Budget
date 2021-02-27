import React from 'react';
import CanvasJSReact from "../canvasjs-3.2.9/canvasjs.react"
import { connect } from 'react-redux';
// CSS
import './budget.css';
import { useState } from 'react';
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
import BudgetCalculations from './budgetCalculations';
// Charts
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Budget = (props) => {
    const budget = props.budget
    console.log(<BudgetCalculations/>)
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

    const expenseOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", 
        title:{
            text: "Breakdown Expenses"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",		
            startAngle: -90,
            dataPoints: [
                { y: 20, label: "Airfare" },
                { y: 24, label: "Food & Drinks" },
                { y: 20, label: "Accomodation" }
            ]
        }]
    }

    const incomeOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1",
        title:{
            text: "Breakdown Income"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",		
            startAngle: -90,
            dataPoints: [
                { y: 20, label: "Airfare" },
                { y: 24, label: "Food & Drinks" },
                { y: 20, label: "Accomodation" }
            ]
        }]
    }
    
    const projectedIncome = {
        animationEnabled: true,
        exportEnabled: true,
        colorSet: "colorSet1",
        title: {
            text: "Monthly Projected"
        },
        axisX: {
            valueFormatString: "MMMM"
        },
        axisY: {
            prefix: "$"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top"
        },
        data: [{
            type: "column",
            name: "Expected Income",
            showInLegend: true,
            xValueFormatString: "MMMM YYYY",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0), y: 27500 },
                { x: new Date(2017, 1), y: 29000 },
                { x: new Date(2017, 2), y: 32000 },
                { x: new Date(2017, 3), y: 36500 },
                { x: new Date(2017, 4), y: 43000 },
                { x: new Date(2017, 5), y: 47000 },
                { x: new Date(2017, 6), y: 52000 },
                { x: new Date(2017, 7), y: 57500 },
                { x: new Date(2017, 8), y: 59500 },
                { x: new Date(2017, 9), y: 63000 },
                { x: new Date(2017, 10), y: 65000 },
                { x: new Date(2017, 11), y: 69500 }
            ]
        },{
            type: "line",
            name: "Expected Expenses",
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0), y: 38000 },
                { x: new Date(2017, 1), y: 39000 },
                { x: new Date(2017, 2), y: 35000 },
                { x: new Date(2017, 3), y: 37000 },
                { x: new Date(2017, 4), y: 42000 },
                { x: new Date(2017, 5), y: 48000 },
                { x: new Date(2017, 6), y: 51000 },
                { x: new Date(2017, 7), y: 58000 },
                { x: new Date(2017, 8), y: 62000 },
                { x: new Date(2017, 9), y: 65000 },
                { x: new Date(2017, 10), y: 68000 },
                { x: new Date(2017, 11), y: 67000 }
            ]
        },{
            type: "area",
            name: "Savings",
            markerBorderColor: "white",
            markerBorderThickness: 2,
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0), y: 11500 },
                { x: new Date(2017, 1), y: 10500 },
                { x: new Date(2017, 2), y: 9000 },
                { x: new Date(2017, 3), y: 13500 },
                { x: new Date(2017, 4), y: 13890 },
                { x: new Date(2017, 5), y: 18500 },
                { x: new Date(2017, 6), y: 16000 },
                { x: new Date(2017, 7), y: 14500 },
                { x: new Date(2017, 8), y: 15880 },
                { x: new Date(2017, 9), y: 24000 },
                { x: new Date(2017, 10), y: 31000 },
                { x: new Date(2017, 11), y: 19000 }
            ]
        }]
    }

    const costRatio = {
        animationEnabled: true,
        title: {
            text: "Percentage of Income Saved"
        },
        subtitles: [{
            text: "24% Spent",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Incomes", y: 76 },
                { name: "Expenses", y: 24 }
            ]
        }]
    }

    return (
        <>
        {console.log(budget)}
        {/*budget container */}
            <Tab.Pane eventKey={props.tabKey} className="budget">
                <Row>
                    <h1>{budget.name}</h1>
                </Row>
                <Row>
                    <Col sm={{ span: 6, offset: 0 }} md={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }}>
                        <p>{budget.description}</p>
                    </Col>
                    <Col sm={{ span: 2, offset: 2 }} md={{ span: 2, offset: 6 }} lg={{ span: 2, offset: 6 }}>
                        <p>Last Edit:{budget.lastUpdated}</p>
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
                                {budget.income.map((income,index) => {
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
                                {budget.expense.map((expense,index)=> {
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
                {/* New Income Form */}
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
        budgets: state.budgets,
        activeBudget: state.activeBudget
        }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget);