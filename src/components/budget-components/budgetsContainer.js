import React from 'react';
// CSS
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// Components

const BudgetsContainer = (props) => {
    let fakeUserBudgets = [1,2,3]

    let renderedBudgets = fakeUserBudgets.map(budget => {
        /* Change All Inputs to state budget."*" object stored inside of db (this.props.budget."*") */
        return (
            <OverlayTrigger key='right' placement='right' overlay={
                <Tooltip id={`tooltip-right`}>
                   Click and Drag
                </Tooltip>}>
                <Row className="rendered-budgets">
                    <Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="budget-title">Budget Title</Card.Title>
                                <hr></hr>
                                <Card.Text className="budget-description">Short Description of the Budget The User Gave...</Card.Text>
                                <Card.Text className="budget-date">Last Updated:"budget.lastUpdated"</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </OverlayTrigger>
        )
    })

    const renderHandler = () => {
        return renderedBudgets.length > 1 ? renderedBudgets : defaultRender()
    }
    const defaultRender = () => {
        return (
            <Row className="rendered-budgets">
                <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                    <h4>Make A New Budget</h4>
                    {/* Replace with new budget function */}
                    <Button onClick={null}>+</Button>
                </Col>
            </Row>
        )
    }
    return (
        <div className="budgets-container">
            {renderHandler()}
        </div>
    );
}

export default BudgetsContainer 