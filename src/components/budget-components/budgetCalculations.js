import { connect } from 'react-redux';

const BudgetCalculations = (props) => {
    const budget = props.budget
    function findNet() {
        const net = totalPos() - totalNeg();
        return net;
    }
    function costRatio() {
        const newCostRatio = [
            {name: "Incomes", y:totalPos()}, 
            {name: "Expenses", y:totalNeg()}
        ]
        return newCostRatio
    }
    function totalPos() {
        let totalPos = 0
        findAllPos().forEach(element => {
            totalPos += element.amount 
        });
        return totalPos;
    }
    function totalNeg() {
        let totalNeg = 0
        findAllNeg().forEach(element => {
            totalNeg += element.amount 
        });
        return totalNeg;
    }
    function findAllPos() {
        const positiveBudgets = budget.income.map((dataPoint) => {
            return {y:(dataPoint.amount * dataPoint.times), label: dataPoint.name};
        });
        return positiveBudgets;
    }
    function findAllNeg() {
        const negativeBudget = budget.expense.map((dataPoint) => {
            return {y:(dataPoint.amount * dataPoint.times), label: dataPoint.name};
        });
        return negativeBudget;
    }
    function monthlyBudgetSaving() {
        const savings = costRatio();
        const Pos = totalPos();
        const Neg = totalPos();
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
    const endCalculations = {
        net: findNet(),
        costRatio: costRatio(),
        positiveBudgets: findAllPos(),
        negativeBudget: findAllNeg(),
        monthlyBudget: monthlyBudgetSaving()
    }
    return(endCalculations)
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn,
        user: state.user,
        budgets: state.budgets,
        activeBudget: state.activeBudget
        }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetCalculations);