import { combineReducers } from 'redux';
import {
    LOG_IN,
    FIND_USER,
    UPDATE_USER,
    DELETE_USER,
    UPDATE_BUDGET,
    DELETE_BUDGET,
    CREATE_BUDGET
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
            return state;
        }
        default: 
            return state;
    }
}

export function budgetsReducer(state=[], action) {
    switch(action.type) {
        case FIND_USER: {
            return state;
        }
        case UPDATE_BUDGET: {
            return state;
        }
        case DELETE_BUDGET: {
            return state;
        }
        case CREATE_BUDGET: {
            return state;
        }
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({
    loggedIn: loginReducer,
    user: userReducer,
    budgets: budgetsReducer
})