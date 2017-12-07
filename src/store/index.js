import { autorun } from "mobx";
import TaskStore from "./taskStore";
import UserStore from "./userStore";


let appState = {
    task: new TaskStore(),
    user: new UserStore(),
}

autorun(() => {
    console.log(`token: `, appState.user.token)
})

export default appState;