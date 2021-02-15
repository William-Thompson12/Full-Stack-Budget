import React from 'react';
// Bootstrap
import Col from 'react-bootstrap/Col';
// Components
import BudgetButton from './budgetButton';

const BudgetControls = (props) => {

    return (
        <>
            <Col className="budget-controls" sm={12} md={12} lg={12}>
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