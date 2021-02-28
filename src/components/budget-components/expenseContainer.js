import React from 'react';

const Expense = (props) => {

    return (
        <>
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.expenseData.name}</td>
            <td>${props.expenseData.amount}</td>
            <td>x{props.expenseData.times}</td>
        </tr>
        </>
    );
}

export default Expense 