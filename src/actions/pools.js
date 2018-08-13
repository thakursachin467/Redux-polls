import { savePoll } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
export const RECEIVE_POOLS = "RECEIVE_POOLS";
export const ADD_POLL = "ADD_POLL";
export function receivepools(polls) {
    return {
        type: RECEIVE_POOLS,
        polls
    }
}


function addPoll(poll) {
    return {
        type: ADD_POLL,
        poll
    }
}



export function handlepolls(poll) {
    return (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(showLoading())
        return savePoll({
            ...poll,
            author: authUser
        })
            .then((poll) => {
                dispatch(addPoll(poll))
                dispatch(hideLoading())
            })
    }
}