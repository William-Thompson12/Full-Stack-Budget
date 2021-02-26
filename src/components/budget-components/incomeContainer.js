import React from 'react';
// Bootstrap
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// Components

const Income = (props) => {

    return (
        <>
            <Row className="budget-income">
                <Col sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }} lg={{ span: 2, offset: 0 }}>
                    {props.index + 1}
                </Col>
                <Col sm={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }}>
                    <p>{props.incomeData.name}</p>
                </Col>
                <Col sm={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }}>
                    <p>Amount:{props.incomeData.amount}</p>
                </Col>
                <Col sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }} lg={{ span: 2, offset: 0 }}>
                    <p>*Monthly:{props.incomeData.times}</p>
                </Col>
            </Row>
        </>
    );
}

export default Income 