import { RECEIVE_USERS } from '../actions/users';
import { ADD_POLL } from '../actions/pools';
import { SAVE_ANSWER } from '../actions/answers';
export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_POLL:
            const poll = action.poll
            const { author, id } = poll
            return {
                ...state,
                [author]: {
                    ...state[author],
                    polls: state[author].polls.concat([id])
                }

            }
        case SAVE_ANSWER:
            const user = state[action.authUser]

            return {
                ...state,
                [action.authUser]: {
                    ...user,
                    answers: user.answers.concat([action.id])
                }
            }
        default:
            return state
    }
}