import React from "react";
import { action, observable, inject } from "mobx";
import { Provider, observer } from "mobx-react";
import {
    Text,
    WebView,
    Button,
    View,
    Modal,
    TouchableHighlight,
    Image,
} from "react-native";
import SideMenu from "react-native-side-menu";
import { styles as Style } from "./style";
import { Base64 } from "./util";

import { AUTH_URL, CLIENT_ID, URL } from "./config";

import appState from "./store/index";

import PageLoading from "./components/loading";
import ItemBox from "./components/ItemBox";

const LocalUri = `http://192.168.1.215:3000`;

@observer
export class Main extends React.Component {
    @observable showWebView = false; 

    @observable checking = false;

    componentWillMount() {
        // appState.user.getUser(); 
        this.checkToken();
    }

    @action
    checkToken() {
        this.checking = true;
        return appState.user.checkToken().then(({status}) => {
            if (status === 401) { 
                this.showWebView = true;
            }

            this.checking = false;
        })
    }

    clickTest() {
        appState.user.setToken(Date.now())
    }

    @action
    deleteToken() {
        appState.user.deleteToken();
        this.checkToken();
    }

    @action
    getAuth({url}) {
        if (url.indexOf(LocalUri) >= 0) {
            let hashquery = url.split("#")[1];
            let hashObj = hashquery.split("&").map(e => e.split("="));
            let token = "";

            hashObj.forEach(e => {
                if (e[0] === "access_token") {
                    token += e[1];
                }

                if (e[0] === "token_type") {
                    token = `${e[1]} ${token}`;
                }
            })

            if (token.length) {
                appState.user.setToken(token);
                this.showWebView = false;
            }
        }
    }

    login() {
        appState.user.login()
    }

    makeViewObj() {
        let urls = [
            `${URL}/auth/oauth/v2/authorize?client_id=${CLIENT_ID}`,
            `response_type=token`,
            `scope=basic`,
            `authorize_uri=${encodeURIComponent(URL)}`,
            `state=${Base64.btoa(LocalUri)}`
        ];

        return {uri: urls.join("&")}
    }

    webViewError = (err) => {
        console.log(err)
    }

    ModalClose(...args) {
        console.log(args)
    }

    _renderChild() {
        if (this.checking) {
            return (<PageLoading />)
        } else {
            return (<View>
                        <Button title="click" onPress={this.deleteToken.bind(this)} />
                        <Button title="test" onPress={this.webViewError.bind(this, "点击了")} />
                        <PageLoading />
                        <ItemBox supplierName={"测试"} number={"CGXXXX"}
                                 order={"SHXXXX"} quantity={500}
                                 purchaser={"采购"} remark={"备注！"}/>
                        <Modal visible={this.showWebView}
                            style={Style.clearPaddingAndMargin}
                            onRequestClose={this.ModalClose.bind(this)}>
                            <WebView source={this.makeViewObj()}
                                    style={Style.fullModal}
                                    onNavigationStateChange={this.getAuth.bind(this)}/>
                        </Modal>
                    </View>);
        }
    }

    render() {
        return (
            <Provider {...appState}>
                {this._renderChild()} 

            </Provider>
        );
    }
}
