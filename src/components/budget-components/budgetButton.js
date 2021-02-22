import React from 'react';
// Bootstrap
import Button from 'react-bootstrap/esm/Button';
// Components

const BudgetButton = (props) => {

    return (
        <>
            <div className="budget-button">
                <Button variant="none" className="btn-none" onClick={props.handleClick}><h3>{props.buttonName}</h3></Button>
            </div>
        </>
    );
}

export default BudgetButton 