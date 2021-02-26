import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

export const defaultState = {
    loggedIn: false,
    user: {
      name: " ",
      email: " ",
      userToken: " "
    },
    budgets: []
}

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;