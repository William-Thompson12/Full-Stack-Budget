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
// Active Budget Types;
export const SET_BUDGET = "SET_BUDGET";

export function findUser(userD) {
    return {
        type: FIND_USER,
        payload: {
            userD
        }
    }
}export function updateUser() {
    return {
        type: UPDATE_USER
    }
}export function deleteUser() {
    return {
        type: DELETE_USER
    }
}export function createBudget() {
    const budgetName = document.getElementById('budget-name').value;
    const budgetDescription = document.getElementById('budget-description').value;
    const newBudget = {
        name: budgetName,
        expense: [],
        income: [],
        description: budgetDescription,
        lastUpdated: new Date() 
    }
    console.log('creating budget', newBudget)
    return {
        type: CREATE_BUDGET,
        payload: {
            newBudget
        }
    }
}export function updateBudget() {
    return {
        type: UPDATE_BUDGET
    }
}export function copyBudget() {
    return {
        type: COPY_BUDGET
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
    console.log(budget)
    return {
        type: SET_BUDGET,
        payload: {
            budget
        }
    }
}