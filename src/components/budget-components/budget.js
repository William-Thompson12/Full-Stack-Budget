import React, { useState, useEffect } from 'react';
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
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
// Components
import Income from './incomeContainer';
import Expense from './expenseContainer';
import TransactionData from '../../services/transactions.services';
// Actions
import { updateBudget, setBudget, createTransaction, findTransaction } from '../../redux/actions';
import { findAllPos, findAllNeg, monthlyBudgetSaving, costRatioData, percentage} from './budgetCalculations';
// Charts
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Budget = (props) => {
    // modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // end modal
    const [transactionData, setTransactionData] = useState([{name:'', budgetId: '', amount:0, times:0, transactionId:'', type:''}])

    function findTransactionData() { 
        TransactionData.getAll(props.budget.budgetId)
        .then((response) => {
        props.findTransaction(response.data);
        setTransactionData(response.data);
        })
    }
    

    useEffect(() => {
        findTransactionData();
    }, []);

    // const transactions = props.transactions.forEach(transaction => {
    //     if (transaction.budgetId === props.budget.budgetId) {
    //         return transaction
    //     } else {
    //         return 
    //     }
    // });

    console.log(transactionData)

    const expenseOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", 
        title:{ text: "Breakdown Expenses" },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}$",		
            startAngle: -90,
            dataPoints: []
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
            dataPoints: []
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
            dataPoints: []
        },{
            type: "line",
            name: "Expected Expenses",
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: []
        },{
            type: "area",
            name: "Savings",
            markerBorderColor: "white",
            markerBorderThickness: 2,
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: []
        }]
    }
    const costRatio = {
        animationEnabled: true,
        title: { text: "Percentage of Income Spent"},
        subtitles: [{
            text: `%${2} Spent`,
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "$#,##0",
            dataPoints: []
        }]
    }

    function createNewIncome() {
        const transactionName = document.getElementById('transactionName').value;
        const transactionAmount = document.getElementById('transactionAmount').value;
        const transactionTimes = document.getElementById('transactionTimes').value;
        const transactionType = document.getElementById('transactionType').value;
        const id = transactionName + transactionTimes;
        const newTransaction = {
            name: transactionName,
            amount: transactionAmount,
            times: transactionTimes,
            budgetId: props.budget.budgetId,
            transactionId: id,
            type: transactionType
        }
        createTransaction(newTransaction);
    }
    function deleteTransaction(id) {
        deleteTransaction(id);
    }
    
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
                <Row>
                    <Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
                        <Button variant="success" onClick={handleShow}>Add Transaction</Button>
                    </Col>
                </Row>
                <Row className="details-container">
                    <Col sm={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                        <div className="income-container">
                            <h1>Incomes:</h1>
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
                                {transactionData.map((income,index) => {
                                    return <Income key={index} incomeData={income} index={index} handleClick={deleteTransaction} transactionId={income.transactionId}/>
                                })}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col sm={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                        <div className="expenses-container">
                            <h1>Expenses:</h1>
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
                                {transactionData.map((expense,index)=> {
                                    return <Expense key={index} expenseData={expense} index={index}/>
                                })}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Tab.Pane>
                            
            {/* Modals */}
            <Modal className="newTransaction-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Enter Income Information Below
                </Modal.Header>
                    <Form controlid="transaction-form">
                        <Form.Group>
                            <Row>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control id="transactionName" autoComplete="off" type="text" placeholder="Enter email" />
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control autoComplete="off" id="transactionAmount" type="text" placeholder="20.00" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Times Per Month</Form.Label>
                                    <Form.Control id="transactionTimes" autoComplete="off" type="text" placeholder="3" />
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control as="select" id="transactionTimes" defaultValue="Choose...">
                                        <option value="expense">Expense</option>
                                        <option value="income">Income</option>
                                    </Form.Control>
                                </Form.Group>
                            </Row>
                        </Form.Group>
                    </Form>
                <Modal.Footer>
                    <Row>
                        <Button variant="secondary" onClick={() => createNewIncome()}>Create Transaction</Button>
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
        },
        createTransaction: (transactionD) => {
            dispatch(createTransaction(transactionD))
        },
        findTransaction: (transactionD) => {
            dispatch(findTransaction(transactionD))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget);