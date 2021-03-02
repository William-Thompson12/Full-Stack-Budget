// Authentication Action Types
export const LOG_IN = 'LOG_IN';
// User Action Types
export const FIND_USER = 'FIND_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
// Budget Action Types
export const CREATE_BUDGET = 'CREATE_BUDGET';
export const UPDATE_BUDGET = 'UPDATE_BUDGET';
export const COPY_BUDGET = 'COPY_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';
export const FIND_BUDGET = 'FIND_BUDGET';
// Active Budget Types;
export const SET_BUDGET = "SET_BUDGET";

export function findUser(userD) {
    return {
        type: FIND_USER,
        payload: {
            userD
        }
    }
}export function updateUser(id, userI) {
    return {
        type: UPDATE_USER,
        payload: {
            id,
            userI
        }
    }
}export function deleteUser(id) {
    return {
        type: DELETE_USER,
        payload: {
            id
        }
    }
}export function findBudgets(userD) {
    return {
        type: FIND_BUDGET,
        payload: {
            userD
        }
    }
}export function createBudget(newBudget) {
    return {
        type: CREATE_BUDGET,
        payload: {
            newBudget
        }
    }
}export function updateBudget(id, budgetInfo) {
    return {
        type: UPDATE_BUDGET,
        payload: {
            id,
            budgetInfo
        }
    }
}export function deleteBudget() {
    return {
        type: DELETE_BUDGET
    }
}export function logIn() {
    return {
        type: LOG_IN
    }
}export function setBudget(budget) {
    return {
        type: SET_BUDGET,
        payload: {
            budget
        }
    }
}