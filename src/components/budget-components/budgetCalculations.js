export async function findNet(budget) {
    const net = await totalPos(budget) - totalNeg(budget);
    return net;
}
export async function costRatioData(budget) {
    const newCostRatio = [
        {name: "Incomes", y: await totalPos(budget)}, 
        {name: "Expenses", y: await totalNeg(budget)}
    ]
    return newCostRatio
}
export async function percentage(budget) {
    const num = await totalPos(budget);
    const negNum = await totalNeg(budget);
  return (negNum/num)*100;
}
export async function totalPos(budget) {
    let totalPos = 0
    const allPos = await findAllPos(budget)
    await allPos.forEach(element => {
        totalPos += element.amount 
    });
    return totalPos;
}
export async function totalNeg(budget) {
    let totalNeg = 0
    const allNeg = await findAllNeg(budget)
    await allNeg.forEach(element => {
        totalNeg += element.amount 
    });
    return totalNeg;
}
export async function findAllPos(budget) {
    const positiveBudgets = await budget.income.map((dataPoint) => {
        return {y:(dataPoint.amount * dataPoint.times), label: dataPoint.name};
    });
    return positiveBudgets;
}
export async function findAllNeg(budget) {
    const negativeBudget = await budget.expense.map((dataPoint) => {
        return {y:(dataPoint.amount * dataPoint.times), label: dataPoint.name};
    });
    return negativeBudget;
}
export async function monthlyBudgetSaving(budget) {
    const savings = await costRatioData(budget);
    const Pos = await totalPos(budget);
    const Neg = await totalPos(budget);
    let monthlyBudget = {
        savings: [],
        expense: [],
        income: []
    };
    for(let i = 0; i < 12; i++) {
        monthlyBudget.savings.push(
            {
                x: new Date(2021, i), 
                y:(savings * (i + 1))
            })
        monthlyBudget.expense.push(
            {   
                x: new Date(2021, i), 
                y:(Neg * (i + 1))
            })
        monthlyBudget.income.push(
            {
                x: new Date(2021, i), 
                y:(Pos * (i + 1))
            })
    }
    return monthlyBudget
}
