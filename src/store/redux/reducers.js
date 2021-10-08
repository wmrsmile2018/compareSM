import { combineReducers } from 'redux';

import users from './users/reducer';

const appReducer = combineReducers({ users });

export function rootReducer(state, action) {
  if (action.type === 'CLEAR_STORE') {
    state = undefined;
  }

  return appReducer(state, action);
}
