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
export const CREATE_PDF = 'CREATE_PDF';

const fakeUser = {
    name: "William Thompson",
    email: "testmail@mail.com",
    budgets: [
        {
            name: "example",
            expense: [],
            income: [],
            description: "My example budget etc...",
            lastUpdated: "02/21/2021"
        },
        {
            name: "example2",
            expense: [],
            income: [],
            description: "My 2nd example budget etc...",
            lastUpdated: "02/21/2021"
        }
    ]
}

export function findUser() {
    return {
        type: FIND_USER,
        payload: {
            fakeUser
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
}export function createPdf(){
    return  {
        type: CREATE_PDF
    }
}export function logIn() {
    return {
        type: LOG_IN
    }
}