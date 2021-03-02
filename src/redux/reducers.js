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
    FIND_BUDGET
} from './actions';
import UserData from '../services/users.services';
import BudgetData from '../services/budgets.services';

export function loginReducer(state=false, action) {
    switch(action.type) {
        case LOG_IN: {
            console.log('returning true')
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
            const data = action.payload.budgetInfo;
            BudgetData.update(id, data);
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

export function activeBudgetReducer(state="", action) {
    switch(action.type) {
        case SET_BUDGET: {
            const activeBudget = action.payload.budget;
            console.log(activeBudget);
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
    activeBudget: activeBudgetReducer
})