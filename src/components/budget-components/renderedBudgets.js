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
                <Nav.Link onClick={() => this.props.handleClick(this.props.tabKey)} eventKey={this.props.tabKey}>
                    <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                            <Card.Text className="budget-title"><strong>{this.props.budgetName}</strong></Card.Text>
                            <span className="bottom-budget">
                                <Card.Text className="budget-description">{this.props.budgetDescription}</Card.Text> 
                            </span>
                            <p className="budget-date">Last Edit: {this.props.budgetDate}</p>
                            <hr></hr>
                        </Col>
                </Nav.Link>
            </Nav.Item>
        )
    }
}
export default RenderedBudgets;
