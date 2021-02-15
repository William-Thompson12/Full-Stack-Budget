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

const BudgetsFolder = (props) => {
    return (
        <div className="budgets-folder">
            <Col sm={{ span: 11, offset: 1 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }}>
                <Row>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <OverlayTrigger key='right' placement='right' overlay={
                                <Tooltip id={`tooltip-right`}>
                                    Click Me!
                                </Tooltip>}>
                                <Row>
                                    <h3>Budgets</h3>
                                </Row>
                            </OverlayTrigger>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <BudgetsContainer/>
                        </Accordion.Collapse>
                    </Accordion>
                </Row>
            </Col>
        </div>
    );
}

export default BudgetsFolder 