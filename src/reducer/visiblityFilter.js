const visiblity = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.visiblityFilte;
        default:
            return state;
    }
}

export default visiblity