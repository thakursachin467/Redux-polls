import { RECEIVE_POOLS } from '../actions/pools';

export default function polls(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POOLS:
            return {
                ...state,
                ...action.polls
            }
        default:
            return state
    }
}