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
import { styles as Style, commonStyle } from "./style";
import { Base64 } from "./util";

import { AUTH_URL, CLIENT_ID, URL } from "./config";

import appState from "./store/index";

import PageLoading from "./components/loading";
import ItemDetail from "./components/ItemDetail";
import ItemBox from "./components/ItemBox";
import EwModal from "./components/Modal";

const LocalUri = `http://192.168.1.215:3000`;

@observer
export class Main extends React.Component {
    @observable showWebView = false;
    @observable showDetail = false;

    @observable checking = false;

    componentWillMount() {
        // 检查权限
        // this.checkToken();
    }

    @action
    checkToken() {
        this.checking = true;
        return appState.user.checkToken().then(({status}) => {
            if (status === 401) { 
                console.log(`我执行了吗？`)
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
        let datas = [
            {
                supplier: {
                    name: "测试"
                },
                number: "CGXXXX",
                order: "SHXXXXX",
                quantity: 500,
                purchaser: {
                    name: "田林"
                },
                remark: "备注",
                predict_time: Date.now(),
                arrival_time: Date.now(),
                arrivalStatus: "已到货",
                checkStatus: "待质检",
                checker: {
                    name: "某某某"
                },
                orderChildren: [
                    {
                        index:0,
                        sku: "xxx123",
                        quantity: 12
                    }
                ]
            }
        ]
        if (this.checking) {
            return (<PageLoading />)
        } else {
            return (<View style={[commonStyle.fullBox, commonStyle.padding]}>
                        {/* <Button title="click" onPress={this.deleteToken.bind(this)} />
                        <Button title="test" onPress={this.webViewError.bind(this, "点击了")} /> */}
                        {/* <PageLoading /> */}

                        {
                            datas.map((e, i) => {
                                return (<ItemBox supplierName={e.supplier.name}
                                                 number={e.number}
                                                 order={e.order}
                                                 quantity={e.quantity}
                                                 purchaser={e.purchaser.name}
                                                 remark={e.remark}
                                                 arrivalStatus={e.arrivalStatus}
                                                 checkStatus={e.checkStatus}
                                                 orderChildren={e.orderChildren}
                                                 doAction={this.openDetail.bind(this, e)}
                                                 key={i}/>)
                            })
                        }

                        {/* <ItemBox supplierName={"测试"} number={"CGXXXX"}
                                 order={"SHXXXX"} quantity={500}
                                 purchaser={"采购"} remark={"备注！"}
                                 doAction={this.openDetail.bind(this)}/>
                        <ItemBox supplierName={"测试"} number={"CGXXXX"}
                                order={"SHXXXX"} quantity={500}
                                purchaser={"采购"} remark={"备注！"}
                                doAction={this.openDetail.bind(this)}/> */}
                        <Modal visible={this.showWebView}
                            style={Style.clearPaddingAndMargin}
                            onRequestClose={this.ModalClose.bind(this)}
                            animationType="slide">
                            <WebView source={this.makeViewObj()}
                                    style={Style.fullModal}
                                    onNavigationStateChange={this.getAuth.bind(this)}/>
                        </Modal>
                        <EwModal visible={this.showDetail}
                                 animationType="slide"
                                 title={"策四"}
                                 onBack={this.closeDetailModal.bind(this)}
                                 onConfirm={this.closeDetailModal.bind(this)}>
                            <ItemDetail/>
                        </EwModal>
                    </View>);
        }
    }

    openDetail(...args) {
        this.showDetail = true;
        appState.task.selectTask = args[0];
    }

    closeDetailModal() {
        this.showDetail = false;
    }

    render() {
        return (
            <Provider {...appState}>
                {this._renderChild()}
            </Provider>
        );
    }
}
