import { getInitialData } from '../utils/api';
import { receivepools } from './pools';
import { receiveusers } from './users';
import { setAuthUser } from './authUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTH_ID = "tylermcginnis";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveusers(users))
                dispatch(receivepools(polls))
                dispatch(setAuthUser(AUTH_ID))
                dispatch(hideLoading())
            })

    }
}