const logger = (store) => (next) => (action) => {
    console.group(action.type)
    const returnVaulue = next(action)
    console.log("the next state:", store.getState());
    console.groupEnd()

    return returnVaulue;
}


export default logger;
