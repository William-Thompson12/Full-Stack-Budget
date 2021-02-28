import { combineReducers } from 'redux';
import {
    LOG_IN,
    FIND_USER,
    UPDATE_USER,
    DELETE_USER,
    UPDATE_BUDGET,
    DELETE_BUDGET,
    CREATE_BUDGET,
    COPY_BUDGET,
    SET_BUDGET
} from './actions';

export function loginReducer(state=false, action) {
    switch(action.type) {
        case LOG_IN: {
            return true;
        }
        default:
            return state;
    }
}

export function userReducer(state={name: " ", email: " "}, action) {
    switch(action.type) {
        case UPDATE_USER: {
            return state;
        }
        case DELETE_USER: {
            return state;
        }
        case FIND_USER: {
            const userD = {
                name: action.payload.userD.name,
                email: action.payload.userD.email,
                userToken: action.payload.userD.userToken
            }

            console.log(userD, 'running reducer')
            return userD;
        }
        default: 
            return state;
    }
}

export function budgetsReducer(state=[], action) {
    switch(action.type) {
        case FIND_USER: {
            const userI = action.payload.fakeUser.budgets;
            return userI;
        }
        case UPDATE_BUDGET: {
            return state;
        }
        case COPY_BUDGET: {
            const copy = action.payload.budget;
            return [...state, copy];
        }
        case DELETE_BUDGET: {
            return state;
        }
        case CREATE_BUDGET: {
            const newBudget = action.payload.newBudget;
            console.log('creating budget', newBudget)
            return [newBudget];
        }
        default: 
            return state;
    }
}

export function activeBudgetReducer(state=" ", action) {
    switch(action.type) {
        case SET_BUDGET: {
            const activeBudget = JSON.stringify(action.payload.budget);
            console.log(action.payload.budget)
            return activeBudget
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