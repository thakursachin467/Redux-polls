import authUser from './auth';
import polls from './polls';
import users from './users';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authUser,
    polls,
    users,
    loadingBar: loadingBarReducer
})