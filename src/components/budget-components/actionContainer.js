import React from 'react';
import { useState } from 'react';
// CSS
import '../budget-components/actionContainer.css';
import '../budget-components/budgetsFolder.css';
import '../budget-components/budgetBuilder.css';
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

const budgetInfo = {
    name: "William Thompson",
    email: "testmail@mail.com",
    budgets: [
        {
            name: "example",
            expense: [
                {
                    name: 'Monthly Rent',
                    amount: 300.00,
                    times: 1
                }
            ],
            income: [
                {
                    name: 'Monthly Pay',
                    amount: 200.00,
                    times: 2
                }
            ],
            description: "My example budget etc...",
            lastUpdated: "02/21/2021"
        },
        {
            name: "example2",
            expense: [
                {
                    name: 'Monthly Rent',
                    amount: 300.00,
                    times: 1
                },
                {
                    name: 'Monthly Haircut',
                    amount: 20.00,
                    times: 1
                }
            ],
            income: [
                {
                    name: 'Monthly Pay',
                    amount: 200.00,
                    times: 2
                },
                {
                    name: 'Monthly Allowance',
                    amount: 200.00,
                    times: 2
                }
            ],
            description: "My 2nd example budget etc...",
            lastUpdated: "02/21/2021"
        },
        {
            name: "example3",
            expense: [
                {
                    name: 'Monthly Rent',
                    amount: 300.00,
                    times: 1
                },
                {
                    name: 'Monthly Cut',
                    amount: 200.00,
                    times: 1
                }
            ],
            income: [
                {
                    name: 'Monthly Pay',
                    amount: 200.00,
                    times: 2
                },
                {
                    name: 'Monthly Pay',
                    amount: 200.00,
                    times: 2
                }
            ],
            description: "My 2nd example budget etc...",
            lastUpdated: "02/21/2021"
        }
    ]
}

const ActionContainer = (props) => {
//     const [activeTab, setActiveTab] = useState(0)

//     const handleSelect = (selectedTab) => {
//         setActiveTab(selectedTab);
//     }
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
                                {budgetInfo.budgets.map((budget, index) => {
                                    return <Budget key={index} budget={budget} tabKey={`${index}`}/>
                                })}
                            </div>
                        </Tab.Content>
                    </Col>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default ActionContainer 