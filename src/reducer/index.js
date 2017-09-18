import todos from "./todo";
import visiblityFilter from "./visiblityFilter";
import { combineReducers } from "redux";


const todoApp = combineReducers({
    todos,
    visiblityFilter,
})

export default todoApp;