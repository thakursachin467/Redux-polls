export const RECEIVE_POOLS = "RECEIVE_POOLS";
export function receivepools(pools) {
    return {
        type: RECEIVE_POOLS,
        pools
    }
}