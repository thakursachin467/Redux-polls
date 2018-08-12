export const RECEIVE_POOLS = "RECEIVE_POOLS";
export function receivepools(polls) {
    return {
        type: RECEIVE_POOLS,
        polls
    }
}