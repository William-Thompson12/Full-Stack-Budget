import { combineReducers } from 'redux';
import {
    LOG_IN,
    FIND_USER,
    UPDATE_USER,
    DELETE_USER,
    UPDATE_BUDGET,
    DELETE_BUDGET,
    CREATE_BUDGET,
    SET_BUDGET,
    FIND_BUDGET,
    CREATE_TRANSACTION,
    DELETE_TRANSACTION,
    UPDATE_TRANSACTION,
    FIND_TRANSACTION
} from './actions';
import UserData from '../services/users.services';
import BudgetData from '../services/budgets.services';
import TransactionData from '../services/transactions.services';

export function loginReducer(state=false, action) {
    switch(action.type) {
        case LOG_IN: {
            return true;
        }
        default:
            return state;
    }
}

export function userReducer(state={name: " ", email: " ", userToken: " "}, action) {
    switch(action.type) {
        case UPDATE_USER: {
            const userI ={
                ...action.payload.userI
            }
            UserData.update(action.payload.id, userI);
            return {...state, ...userI};
        }
        case DELETE_USER: {
            UserData.delete(action.payload.id)
            return state;
        }
        case FIND_USER: {
            const userD = {
                ...action.payload.userD
            }
            return userD;
        }
        default: 
            return state;
    }
}

export function budgetsReducer(state=[], action) {
    switch(action.type) {
        case FIND_BUDGET: {
            const userD = action.payload.userD;
            return [...userD];
        }
        case UPDATE_BUDGET: {
            const id = action.payload.id;
            const data = action.payload.newBudget;
            BudgetData.update(id, data)
            return state;
        }
        case DELETE_BUDGET: {
            const id = action.payload.id;
            BudgetData.delete(id);
            return state;
        }
        case CREATE_BUDGET: {
            const newBudget = action.payload.newBudget;
            BudgetData.create(newBudget);
            return [...state, newBudget];
        }
        default: 
            return state;
    }
}

export function transactionsReducer(state=[], action) {
    switch(action.type) {
        case FIND_TRANSACTION: {
            const transactionD = action.payload.transactionD;
            console.log(transactionD);
            return [...transactionD];
        }
        case UPDATE_TRANSACTION: {
            const id = action.payload.id;
            const data = action.payload.newTransaction;
            TransactionData.update(id, data)
            const updatedState = state.forEach(transaction => {
                if(transaction.transactionId === id) {
                    return data
                } else {
                    return transaction
                }
            });
            return updatedState;
        }
        case DELETE_TRANSACTION: {
            const id = action.payload.id;
            TransactionData.delete(id);
            const updatedState = state.forEach(transaction => {
                if(transaction.transactionId === id) {
                    return 
                } else {
                    return transaction
                }
            });
            return updatedState;
        }
        case CREATE_TRANSACTION: {
            const newTransaction = action.payload.transactionD;
            TransactionData.create(newTransaction);
            console.log(newTransaction, TransactionData.create)
            return [...state, newTransaction];
        }
        default: 
            return state;
    }
}

export function activeBudgetReducer(state="", action) {
    switch(action.type) {
        case SET_BUDGET: {
            const activeBudget = action.payload.budget;
            return activeBudget;
        }
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({
    loggedIn: loginReducer,
    user: userReducer,
    budgets: budgetsReducer,
    activeBudget: activeBudgetReducer,
    transactions: transactionsReducer
})