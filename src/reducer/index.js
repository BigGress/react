import todos from "./todo";
import { combineReducers } from "redux";


import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
    todos,
    visibilityFilter,
})

export default todoApp;