import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';

const AppReducer = combineReducers({
  weatherReducer
});

export default AppReducer;
