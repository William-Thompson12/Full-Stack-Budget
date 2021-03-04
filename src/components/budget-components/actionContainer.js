import React from 'react';
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
import BudgetsContainer from './budgetsContainer';
import BudgetControls from './budgetControls';
import Budget from './budget';


const ActionContainer = (props) => {

    return (
        <>
        <Row>
            <Accordion defaultActiveKey="0">
                <Accordion.Toggle className="budgets-folder-button" as={Button} variant="none" eventKey="1">
                    <OverlayTrigger key='top' placement='top' overlay={
                        <Tooltip id={`tooltip-top`}>Click Me!</Tooltip>}>
                            <h3>Controls</h3>
                    </OverlayTrigger>
                </Accordion.Toggle>
                <div className="budget-controls">
                    <Accordion.Collapse eventKey="1">
                        <BudgetControls/>
                    </Accordion.Collapse>
                </div>
            </Accordion>
        </Row>
        <br></br>
        <Tab.Container id="action-Container" defaultActiveKey={props.budgets[0].budgetId}>
            <Row>
                <Col sm={12} md={3} lg={3}>
                    <Col className="budgets-folder" sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 11, offset: 1 }}>
                        <BudgetsContainer/>
                    </Col>
                </Col>
                <Col sm={{ span: 12, offset: 0 }} md={{ span: 9, offset: 0 }} lg={{ span: 9, offset: 0 }}>
                    <Col sm={12} md={11} lg={11}>
                        <Tab.Content className="budget-builder">
                            {props.budgets.map((budget, index) => {
                                return <Budget index={index} key={index + budget.name} transactions={props.transactions} budget={budget} tabKey={budget.budgetId}/>
                            })}
                        </Tab.Content>
                    </Col>
                </Col>
            </Row>
        </Tab.Container>
        </>
    );
}

function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionContainer);