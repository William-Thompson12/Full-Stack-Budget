import React from 'react';
// Bootstrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components

const NewBudgetForm = (props) => {
    return (
        <>
            <Form id="new-budget-form">
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Name</Form.Label>
                            <Form.Control id="budget-name" autoComplete="off" type="text" placeholder="Budget Name:" />
                        </Col>
                        <Col>
                            <Form.Label>Description</Form.Label>
                            <Form.Control autoComplete="off" id="budget-description" type="text" placeholder="Description:" />
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </>
    );
}

export default NewBudgetForm 