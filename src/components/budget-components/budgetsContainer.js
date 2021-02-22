import React from 'react';
import { connect } from 'react-redux';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
// CSS
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
// Components
import RenderedBudgets from './renderedBudgets';
// Actions
import { createBudget } from '../../redux/actions';

class List extends React.Component {
    render() {
      const { provided, innerRef, children } = this.props;
      return (
        <div {...provided.droppableProps} ref={innerRef}>
          {children}
        </div>
      );
    }
}

const BudgetsContainer = (props) => {
    const budgets = props.budgets

    const defaultRender = () => {
        return (
            <Row className="rendered-budgets">
                <Col sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                    <div className="height">
                        <h4>Make A New Budget </h4>
                        {/* Replace with new budget function */}
                        <Button onClick={props.createBudget()}>+</Button>
                    </div>
                </Col>
            </Row>
        )
    }

    return (
        <div className="budgets-container">
            <DragDropContext>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <List provided={provided} innerRef={provided.innerRef}>
                            <Draggable draggableId="budget">
                                {(provided) => (
                                    budgets.length === 0 ? defaultRender() : budgets.map((budget) => { return( <RenderedBudgets budget={budget} provided={provided} innerRef={provided.innerRef} />)})
                                )}
                            </Draggable>
                            {provided.placeholder}
                        </List>
                    )}
                </Droppable>  
            </DragDropContext>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        budgets: state.budgets
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        createBudget: () => { 
            dispatch(createBudget())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsContainer);