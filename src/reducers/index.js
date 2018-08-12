import authUser from './auth';
import polls from './polls';
import users from './users';
import { combineReducers } from 'redux';

export default combineReducers({
    authUser,
    polls,
    users
})