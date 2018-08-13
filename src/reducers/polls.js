import { RECEIVE_POOLS, ADD_POLL } from '../actions/pools';
import { SAVE_ANSWER } from '../actions/answers';


export default function polls(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POOLS:
            return {
                ...state,
                ...action.polls
            }
        case ADD_POLL:
            return {
                ...state,
                [action.poll.id]: action.poll,

            }
        case SAVE_ANSWER:
            const { answer, id, authUser } = action;
            const poll = state[id]
            const votesKey = answer + 'Votes'
            return {
                ...state,
                [action.id]: {
                    ...poll,
                    [votesKey]: poll[votesKey].concat([authUser])
                }
            }
        default:
            return state
    }
}