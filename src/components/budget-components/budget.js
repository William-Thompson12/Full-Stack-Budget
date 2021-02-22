import React from 'react';
import CanvasJSReact from "../canvasjs-3.2.9/canvasjs.react"
// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const budgetInfo = {
    name: "",
    type: "",
    expense: [],
    income: [],
    description: "",
    lastUpdated: null,
}

const Budget = (props) => {

    return (
        <>
            <div className="budget">
                <Row>
                    <h1>Budget Title</h1>
                </Row>
                <Row>
                    <Col sm={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                        <h1>Income:</h1>
                        <div className="income-container">

                        </div>
                    </Col>
                    <Col sm={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                        <h1>Expenses:</h1>
                        <div className="Expenses-container">
                            
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Budget