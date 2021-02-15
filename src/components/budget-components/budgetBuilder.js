import React from 'react';
// CSS
import '../budget-components/budgetBuilder.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// Components
import BudgetControls from './budgetControls';
import Budget from './budget';

const BudgetBuilder = (props) => {
    return (
        <>
            <Row>
                <Col sm={10} md={10} lg={10}>
                    <div className="budget-builder">
                        {/* Pass active id? */}
                        <Budget/>
                    </div>
                </Col>
                <Col sm={2} md={2} lg={2}>
                    <div className="budget-controls">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <OverlayTrigger key='right' placement='right' overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Click Me!
                                    </Tooltip>}>
                                    <Row>
                                        <h3>Controls</h3>
                                    </Row>
                                </OverlayTrigger>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <BudgetControls/>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default BudgetBuilder 