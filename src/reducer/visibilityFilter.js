const visiblity = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
        console.log(action.filter)
            return action.filter;
        default:
            return state;
    }
}

export default visiblity