import { combineReducers } from 'redux';
import {
    LOG_IN
} from './actions';

export function loginReducer(state=false, action) {
    console.log('login function ran')
    // switch(action.type) {
    //     case LOG_IN: {
    //         return true
    //     }
    //     default:
    //         return state;
    // }
}

export const rootReducer = combineReducers({
    loggedIn: loginReducer()
})