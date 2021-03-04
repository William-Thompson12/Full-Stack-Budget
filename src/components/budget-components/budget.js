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
    console.log(props.budget)
    // modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // end modal
    const [transactionData, setTransactionData] = useState([])

    const [projectedIncome, setProjectedIncome] = useState({
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
    })

    const [incomeOptions, setIncomeOptions] = useState({
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
    })


    const [expenseOptions, setExpenseOptions] = useState({
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
    })

    const [costRatio, setCostRatio] = useState({
        animationEnabled: true,
        title: { text: "Percentage of Income Spent"},
        subtitles: [{
            text: `%$ Spent`,
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
    })

    function findTransactionData() {
        console.log(props.budget.budgetId, TransactionData)
        TransactionData.getAll(props.budget.budgetId)
        .then((response) => {
            props.findTransaction(response.data);
            setTransactionData(response.data);
        })
    }
    
    useEffect(() => {
        findTransactionData();
    }, [props.budget.budgetId]);

    useEffect(() => {
        if(transactionData.length > 0) {
            console.log('running functions', transactionData)
            budgetFunctions();
        }
    }, [transactionData]);

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
        props.createTransaction(newTransaction);
    }
    function deleteTransaction(id) {
        deleteTransaction(id);
    }
    
    const chartData = {}

    function budgetFunctions() {
        let newProjectedIncome = projectedIncome
        let newExpense = expenseOptions
        let newIncome = incomeOptions
        let newCostRatioData = costRatio

        chartData.incomeBreakDown = findAllPos(transactionData);
        chartData.expenseBreakDown = findAllNeg(transactionData);
        chartData.projectMonthly = monthlyBudgetSaving(transactionData);
        chartData.costRatioData = costRatioData(transactionData);
        chartData.percentageNumber = percentage(transactionData);

        newProjectedIncome.data[0].dataPoints = chartData.projectMonthly.income
        newProjectedIncome.data[1].dataPoints = chartData.projectMonthly.expense
        newProjectedIncome.data[2].dataPoints = chartData.projectMonthly.savings
        newExpense.data[0].dataPoints = chartData.expenseBreakDown
        newIncome.data[0].dataPoints = chartData.incomeBreakDown
        newCostRatioData.data[0].dataPoints = chartData.costRatioData
        newCostRatioData.subtitles[0].text = `%${chartData.percentageNumber} Spent`
        console.log(newIncome, newExpense, newCostRatioData)
        
        setProjectedIncome(newProjectedIncome);
        setIncomeOptions(newIncome);
        setExpenseOptions(newExpense);
        setCostRatio(newCostRatioData);
    }

    console.log(transactionData);
    
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
                    <Col sm={{ span: 12, offset: 0 }} md={{ span: 2, offset: 5 }} lg={{ span: 2, offset: 5 }}>
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
                                    if(income.type === "income") {
                                        return <Income key={income.transactionId} incomeData={income} index={index} handleClick={deleteTransaction}/>
                                    }
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
                                    if(expense.type === "expense") {
                                        return <Expense key={expense.transactionId} expenseData={expense} index={index} handleClick={deleteTransaction}/>
                                    }
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
                            <Form.Label>Name</Form.Label>
                            <Form.Control id="transactionName" autoComplete="off" type="text" placeholder="Rent" />
                            <Form.Label>Amount</Form.Label>
                            <Form.Control autoComplete="off" id="transactionAmount" type="text" placeholder="200" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Times Per Month</Form.Label>
                            <Form.Control id="transactionTimes" autoComplete="off" type="text" placeholder="1" />
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select" id="transactionType" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option value="expense">Expense</option>
                                <option value="income">Income</option>
                            </Form.Control>
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