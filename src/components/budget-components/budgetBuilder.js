import React from 'react';
// CSS
import '../budget-components/budgetBuilder.css';
// Bootstrap
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Components
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

console.log(budgetInfo.budgets.map((budget, index) => {
    return <Budget budget={budget} tabKey={index}/>
}))
const BudgetBuilder = (props) => {
    return (
        <>
            <Row>
                <Col sm={12} md={11} lg={11}>
                    <Tab.Content className="budget-builder">
                        {budgetInfo.budgets.map((budget, index) => {
                            return <Budget key={budget.name} budget={budget} tabKey={index}/>
                        })}
                    </Tab.Content>
                </Col>
            </Row>
        </>
    );
}

export default BudgetBuilder 