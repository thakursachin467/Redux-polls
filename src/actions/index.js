import { getInitialData } from '../utils/api';
import { receivepools } from './pools';
import { receiveusers } from './users';
import { setAuthUser } from './authUser';

const AUTH_ID = "tylermcginnis";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveusers(users))
                dispatch(receivepools(polls))
                dispatch(setAuthUser(AUTH_ID))
            })

    }
}