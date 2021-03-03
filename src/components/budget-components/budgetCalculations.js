// export function findBoth(transaction) {
//     const income = totalNeg(transaction)
//     const expense = totalPos(transaction)
//     let data = {
//         income,
//         expense
//     }
//     return data
// }

// export function costRatioData(transaction) {
//     const both = findBoth(transaction)
//     const newCostRatio = [
//         {name: "Incomes", y: both.income}, 
//         {name: "Expenses", y: both.expense}
//     ]
//     return newCostRatio;
// }
// export function percentage(transaction) {
//     const num = totalPos(transaction);
//     const negNum = totalNeg(transaction);
//   return (negNum/num)*100;
// }
// export function totalPos(transaction) {
//     let totalPosStart = 0
//     const posTotal = findAllPos(transaction)
//     posTotal.forEach(element => {
//         totalPosStart += element.y 
//     })
//     return totalPosStart
// }
// export function totalNeg(transaction) {
//     let totalNegStart = 0
//     const negTotal = findAllNeg(transaction)
//     console.log(negTotal)
//     negTotal.forEach(element => {
//         totalNegStart += element.y 
//     })
//     return totalNegStart
// }
// export function findAllPos(transaction) {
//     const posBudgets = transaction.forEach((dataPoint) => {
//         if(dataPoint.type === ""){
//             return {y:(dataPoint.amount * dataPoint.times), label: dataPoint.name};
//         } else {
//         }
//     })
//     return posBudgets
// }
// export function findAllNeg(transaction) {
//     const negBudgets = transaction.forEach((dataPoint) => {
//         console.log(dataPoint, transaction)
//         if(dataPoint.type === ""){
//             return {y:(dataPoint.amount * dataPoint.times), label: dataPoint.name};
//         } else {
//         }
//     })
//     console.log(negBudgets);
//     return negBudgets
// }
// export function monthlyBudgetSaving(transaction) {
//     const both = findBoth(transaction)
//     let monthlyBudget = {
//         savings: [],
//         expense: [],
//         income: []
//     };
//     for(let i = 0; i < 12; i++) {
//         monthlyBudget.savings.push(
//             {
//                 x: new Date(2021, i), 
//                 y:((both.income - both.expense) * (i + 1))
//             })
//         monthlyBudget.expense.push(
//             {   
//                 x: new Date(2021, i), 
//                 y:(both.expense * (i + 1))
//             })
//         monthlyBudget.income.push(
//             {
//                 x: new Date(2021, i), 
//                 y:(both.income * (i + 1))
//             })
//     }
//     return monthlyBudget
// }
