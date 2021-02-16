import React from 'react';
// CSS
import '../budget-components/budgetsFolder.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// Components
import BudgetsContainer from './budgetsContainer';
import BudgetControls from './budgetControls';

const BudgetsFolder = (props) => {

    return (
        <Col className="budgets-folder" sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 11, offset: 1 }}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Button} variant="none" eventKey="0">
                        <OverlayTrigger key='right' placement='right' overlay={
                            <Tooltip id={`tooltip-right`}>Click Me!</Tooltip>}>
                                <h3>Budgets</h3>
                        </OverlayTrigger>
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="none" eventKey="1">
                        <OverlayTrigger key='right' placement='right' overlay={
                            <Tooltip id={`tooltip-right`}>Click Me!</Tooltip>}>
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
        );
}

export default BudgetsFolder 