import React from 'react';
// CSS
// Bootstrap
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// Components
class RenderedBudgets extends React.Component {
    render() {
        const { provided, innerRef } = this.props;
        return (
            /* Change All Inputs to state budget."*" object stored inside of db (this.props.budget."*") */
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={innerRef}>
            <OverlayTrigger key='right' placement='right' overlay={
                <Tooltip id={`tooltip-right`}>
                    Click and Drag
                </Tooltip>}>
                <div className="rendered-budgets">
                    <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                        <Card>
                            <Card.Body>
                                <Card.Text className="budget-title"><strong>{this.props.budgetName}</strong></Card.Text>
                                <hr></hr>
                                <Card.Text className="budget-description">{this.props.budgetDescription}</Card.Text>
                                <p className="budget-date">Last Edit: {this.props.budgetDate}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </OverlayTrigger>
            </div>
        )
    }
}
export default RenderedBudgets;
