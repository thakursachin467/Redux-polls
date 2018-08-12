export const RECEIVE_USERS = "RECEIVE_USERS";
export function receiveusers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}