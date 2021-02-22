// Authentication Action Types
export const LOG_IN = 'LOG_IN';
// User Action Types
export const FIND_USER = 'FIND_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
// Budget Action Types
export const CREATE_BUDGET = 'CREATE_BUDGET';
export const UPDATE_BUDGET = 'UPDATE_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';
export const CREATE_PDF = 'CREATE_PDF';

export function findUser() {
    return {
        type: FIND_USER
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
    return {
        type: CREATE_BUDGET
    }
}export function updateBudget() {
    return {
        type: UPDATE_BUDGET
    }
}export function deleteBudget() {
    return {
        type: DELETE_BUDGET
    }
}export function createPdf(){
    return  {
        type: CREATE_PDF
    }
}export function logIn() {
    return {
        type: LOG_IN
    }
}