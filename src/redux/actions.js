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
export const FIND_BUDGET = 'FIND_BUDGET';
// Active Budget Types
export const SET_BUDGET = "SET_BUDGET";
// Transaction Action Types
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const FIND_TRANSACTION = 'FIND_TRANSACTION';

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
}export function updateBudget(id, newBudget) {
    console.log(id, newBudget)
    return {
        type: UPDATE_BUDGET,
        payload: {
            id,
            newBudget
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
}export function createTransaction(transactionD) {
    return {
        type: CREATE_TRANSACTION,
        payload: {
            transactionD
        }
    }
}export function updateTransaction(id, transactionD) {
    return {
        type: UPDATE_TRANSACTION,
        payload: {
            id,
            transactionD
        }
    }
}export function deleteTransaction(id) {
    return {
        type: DELETE_TRANSACTION,
        payload: {
            id
        }
    }
}export function findTransaction(transactionD) {
    console.log(transactionD, 'action')
    return {
        type: FIND_TRANSACTION,
        payload: {
            transactionD
        }
    }
}