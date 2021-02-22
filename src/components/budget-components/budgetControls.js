import React from 'react';
import { connect } from 'react-redux';
// Bootstrap
import Col from 'react-bootstrap/Col';
// Actions
import { createBudget, updateBudget, deleteBudget, createPdf } from '../../redux/actions';
// Components
import BudgetButton from './budgetButton';

const BudgetControls = (props) => {

    return (
        <>
            <Col className="budget-controls" sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }}>
                {/* Change to Button Functions and Names (Edit Button)*/}
                <BudgetButton handleClick={props.createBudget} buttonName={'Create Budget'}/>
                <BudgetButton handleClick={null} buttonName={'Edit Budget'}/>
                <BudgetButton handleClick={props.createBudget} buttonName={'Create Copy'}/>
                <BudgetButton handleClick={props.createBudget} buttonName={'Delete Budget'}/>
                <BudgetButton handleClick={props.createBudget} buttonName={'Create PDF'}/>
            </Col>
        </>
    );
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        createBudget: () => { 
            dispatch(createBudget())
        },
        updateBudget: () => { 
            dispatch(updateBudget())
        },          
        deleteBudget: () => { 
            dispatch(deleteBudget())
        },
        createPdf: () => {
            dispatch(createPdf())
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetControls);