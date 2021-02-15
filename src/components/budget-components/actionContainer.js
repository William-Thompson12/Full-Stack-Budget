import React from 'react';
// CSS
import '../budget-components/actionContainer.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Components
import BudgetsFolder from './budgetsFolder';
import BudgetBuilder from './budgetBuilder';

const ActionContainer = (props) => {
    return (
        <div className="action-container">
            <Row>
                <Col xs={12} md={2} lg={2}>
                    <BudgetsFolder/>
                </Col>
                <Col xs={12} md={9} lg={9}>
                    <BudgetBuilder/>
                </Col>
            </Row>
        </div>
    );
}

export default ActionContainer 