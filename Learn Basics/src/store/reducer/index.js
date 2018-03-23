import reducer from './reducer';
import authReducer from './auth';
import { combineReducers } from 'redux';

export default combineReducers({
    rootReducer: reducer,
    authReducer: authReducer
})