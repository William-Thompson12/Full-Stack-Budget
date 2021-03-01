import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
// CSS
import '../budget-components/actionContainer.css';
import '../budget-components/budgetsFolder.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// Components
import BudgetData from '../../services/budgets.services'
import BudgetsContainer from './budgetsContainer';
import BudgetControls from './budgetControls';
import Budget from './budget';
import { findBudgets } from '../../redux/actions';

const ActionContainer = (props) => {
    // const user = props.user;
    const budgets = props.budgets
    //LOAD BUDGET DATA
    // const [isLoading, setLoading] = useState(true);
    // const [budgets, setBudget] = useState();

    // useEffect(() => {
    //     BudgetData.getAll(user.userToken)
    //     .then((response) => {
    //         setBudget(response.data);
    //         findBudgets(response.data);
    //         setLoading(false);
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // });

    // if (isLoading) {
    //     return <div id="action-Container">Loading...</div>;
    // }

    return (
        <Tab.Container id="action-Container" defaultActiveKey='0'>
            <Row>
                <Col sm={12} md={3} lg={3}>
                    <Col className="budgets-folder" sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 11, offset: 1 }}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Toggle className="budgets-folder-button" as={Button} variant="none" eventKey="0">
                                <OverlayTrigger key='top' placement='top' overlay={
                                    <Tooltip id={`tooltip-top`}>Click Me!</Tooltip>}>
                                        <h3>Budgets</h3>
                                </OverlayTrigger>
                            </Accordion.Toggle>
                            <Accordion.Toggle className="budgets-folder-button" as={Button} variant="none" eventKey="1">
                                <OverlayTrigger key='top' placement='top' overlay={
                                    <Tooltip id={`tooltip-top`}>Click Me!</Tooltip>}>
                                        <h3>Controls</h3>
                                </OverlayTrigger>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                    <BudgetsContainer/>
                            </Accordion.Collapse>
                            <div className="budget-controls">
                                <Accordion.Collapse eventKey="1">
                                    <BudgetControls/>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </Col>
                </Col>
                <Col sm={{ span: 12, offset: 0 }} md={{ span: 9, offset: 0 }} lg={{ span: 9, offset: 0 }}>
                    <Col sm={12} md={11} lg={11}>
                        <Tab.Content>
                            <div className="budget-builder">
                                {budgets.map((budget, index) => {
                                    return <Budget key={index + budget.name} budget={budget} tabKey={`${budget.budgetId}`}/>
                                })}
                            </div>
                        </Tab.Content>
                    </Col>
                </Col>
            </Row>
        </Tab.Container>
    );
}

function mapStateToProps(state) {
    return {
        user: state.user,
        budgets: state.budgets
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        findBudgets: (id) => {
            dispatch(findBudgets(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionContainer);