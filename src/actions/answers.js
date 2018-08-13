import { savePollAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
export const SAVE_ANSWER = "SAVE_ANSWER";


function addAnswer({ authUser, id, answer }) {
    return {
        type: SAVE_ANSWER,
        authUser,
        id,
        answer
    }
}


export function handleAnswer(answerData) {

    return (dispatch) => {
        dispatch(showLoading())
        return savePollAnswer(answerData)
            .then(() => {
                dispatch(addAnswer(answerData))
            })
            .then(() => {
                dispatch(hideLoading())
            })

    }
}