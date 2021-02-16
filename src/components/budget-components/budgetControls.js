import React from 'react';
// Bootstrap
import Col from 'react-bootstrap/Col';
// Components
import BudgetButton from './budgetButton';

const BudgetControls = (props) => {

    return (
        <>
            <Col className="budget-controls" sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }}>
                {/* Change to Button Functions and Names (Edit Button)*/}
                <BudgetButton handleClick={null} buttonName={null}/>
                <BudgetButton handleClick={null} buttonName={null}/>
                <BudgetButton handleClick={null} buttonName={null}/>
                <BudgetButton handleClick={null} buttonName={null}/>
                <BudgetButton handleClick={null} buttonName={null}/>
            </Col>
        </>
    );
}

export default BudgetControls 