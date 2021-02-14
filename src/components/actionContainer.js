import React from 'react';
// CSS
import '../components/actionContainer.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Components

const ActionContainer = (props) => {
    return (
        <div className="action-container">
            <Row>
                <Col xs={12} md={4} lg={4}>
                </Col>
                <Col xs={12} md={8} lg={8}>
                </Col>
            </Row>
        </div>
    );
}

export default ActionContainer 