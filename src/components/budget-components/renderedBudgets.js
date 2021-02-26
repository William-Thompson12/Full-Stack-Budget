import React from 'react';
// CSS
// Bootstrap
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
// Components
class RenderedBudgets extends React.Component {
    render() {
        return (
            /* Change All Inputs to state budget."*" object stored inside of db (this.props.budget."*") */
            <Nav.Item className="rendered-budgets">
                <Nav.Link eventKey={this.props.tabKey}>
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
                </Nav.Link>
            </Nav.Item>
        )
    }
}
export default RenderedBudgets;
