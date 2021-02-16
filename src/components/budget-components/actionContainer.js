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
                <Col sm={12} md={3} lg={3}>
                    <BudgetsFolder/>
                </Col>
                <Col sm={{ span: 12, offset: 0 }} md={{ span: 9, offset: 0 }} lg={{ span: 9, offset: 0 }}>
                    <BudgetBuilder/>
                </Col>
            </Row>
        </div>
    );
}

export default ActionContainer 