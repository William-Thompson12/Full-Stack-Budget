import React from 'react';
// CSS
import '../budget-components/budgetBuilder.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Components
import Budget from './budget';

const BudgetBuilder = (props) => {
    return (
        <>
            <Row>
                <Col sm={12} md={11} lg={11}>
                    <div className="budget-builder">
                        {/* Pass active id? */}
                        <Budget/>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default BudgetBuilder 