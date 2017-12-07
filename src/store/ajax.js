import { autorun } from "mobx";
import { URL } from "../config";

import appState from "./index";
import { assign } from "../util";

autorun(() => {
    if (!!appState && !!appState.user) {
        defaultOptions.headers.Authorization = appState.user.token;
    }
})

export let defaultOptions = {
    headers: {
        Authorization: undefined,
    }
};

function makeAjax(url, options) {
    return fetch(`${URL}/${url}`, assign({}, defaultOptions, options));
}

export let UserAjax = {
    getUser: async () => {
        try {
            return await makeAjax("auth/users/self", {method: "GET"});
        } catch (error) {
            console.error(error)
        }
    }
}