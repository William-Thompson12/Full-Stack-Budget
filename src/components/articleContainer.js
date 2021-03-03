import React from 'react';
import CanvasJSReact from "./canvasjs-3.2.9/canvasjs.react";
// CSS
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Charts
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Article = (props) => {
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
            dataPoints:[
                { x: new Date(2021, 0), y: 38000 },
                { x: new Date(2021, 1), y: 39000 },
                { x: new Date(2021, 2), y: 35000 },
                { x: new Date(2021, 3), y: 37000 },
                { x: new Date(2021, 4), y: 42000 },
                { x: new Date(2021, 5), y: 48000 },
                { x: new Date(2021, 6), y: 41000 },
                { x: new Date(2021, 7), y: 38000 },
                { x: new Date(2021, 8), y: 42000 },
                { x: new Date(2021, 9), y: 45000 },
                { x: new Date(2021, 10), y: 48000 },
                { x: new Date(2021, 11), y: 47000 }]
        },{
            type: "line",
            name: "Expected Expenses",
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2021, 0), y: 27500 },
                { x: new Date(2021, 1), y: 29000 },
                { x: new Date(2021, 2), y: 22000 },
                { x: new Date(2021, 3), y: 26500 },
                { x: new Date(2021, 4), y: 33000 },
                { x: new Date(2021, 5), y: 37000 },
                { x: new Date(2021, 6), y: 32000 },
                { x: new Date(2021, 7), y: 27500 },
                { x: new Date(2021, 8), y: 29500 },
                { x: new Date(2021, 9), y: 43000 },
                { x: new Date(2021, 10), y: 45000},
                { x: new Date(2021, 11), y: 39500}]
        },{
            type: "area",
            name: "Savings",
            markerBorderColor: "white",
            markerBorderThickness: 2,
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2021, 0), y: 11500 },
                { x: new Date(2021, 1), y: 10500 },
                { x: new Date(2021, 2), y: 9000 },
                { x: new Date(2021, 3), y: 13500 },
                { x: new Date(2021, 4), y: 13890 },
                { x: new Date(2021, 5), y: 18500 },
                { x: new Date(2021, 6), y: 16000 },
                { x: new Date(2021, 7), y: 14500 },
                { x: new Date(2021, 8), y: 15880 },
                { x: new Date(2021, 9), y: 10000 },
                { x: new Date(2021, 10), y: 4000 },
                { x: new Date(2021, 11), y: 19000 }
            ]
        }]
    }
    return (
        <div className="article-container">
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <h3> Welcome to Budget Tool.</h3>
                    <p> Budget Tool is exactly what it sounds like, a personal budgeting app. Create an Account and immediate start tracking budgets</p>
                </Col>
            </Row>
            <Row> Example Chart Below </Row>
            <hr></hr>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <CanvasJSChart options = {projectedIncome} />
                </Col>
            </Row>
        </div>
    );
}

export default Article 