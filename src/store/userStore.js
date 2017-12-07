import {
    observable,
    action
} from "mobx";

import { AsyncStorage } from "react-native";

import {
    UserAjax,
    assign,
    defaultOptions,
} from "./ajax";

import { AUTH_URL, CLIENT_ID, URL } from "../config";

export default class UserStore {
    @observable token = "";
    @observable user = {};

    constructor() {
    }

    @action
    getStorageToken() {
        try {
            return AsyncStorage.getItem("token").then((token) => {
                this.token = token;
                defaultOptions.headers.Authorization = token;
    
                return token;
            })
        } catch (err) {
            console.error(err)
        }
    }

    @action
    deleteToken() {
        AsyncStorage.removeItem("token");
        this.token = "";
    }

    @action
    async checkToken() {
        try {
            let token = await this.getStorageToken();
            return await this.getUser()
        } catch(err) {
            console.log(err)
        }
    }

    @action
    setToken(token) {
        this.token = token;
        AsyncStorage.setItem("token", this.token);
    }

    @action
    async getUser() {
        try {
            let res = await UserAjax.getUser();
            let data = {
                data: res.json(),
                headers: res.headers,
                status: res.status
            };
    
            if (data.status === 200) {
                action(() => {
                    assign(this.user, data.data)
                })
                return data;
            } else if (data.status === 401) {
                return data;
            }
        } catch (error) {
            console.log(error);
        }
    }

}