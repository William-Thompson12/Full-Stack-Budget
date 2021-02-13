import { combineReducers } from 'redux';
import {
    LOG_IN
} from './actions';

function loginReducer(state=false, action) {
    switch(action.type) {
        case LOG_IN: {
            return true
        }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    loggedIn: loginReducer()
})