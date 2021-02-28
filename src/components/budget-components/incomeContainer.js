import React from 'react';

const Income = (props) => {

    return (
        <>
          <tr>
            <td>{props.index + 1}</td>
            <td>{props.incomeData.name}</td>
            <td>${props.incomeData.amount}</td>
            <td>x{props.incomeData.times}</td>
          </tr>
        </>
    );
}

export default Income 