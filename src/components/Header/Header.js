import React,{Component} from "react";
import {
    StyleSheet,
    Text,
} from "react-native";

import { isAndroid } from "../../../config";

import HeaderAndroid from "./Header.android";
import HeaderIOS from "./Header.android";

export default class EwHeader extends Component {
    render() {
        return (
            <View style={styles.headerView}>
                <Button>test</Button>
                {isAndroid ? <HeaderAndroid title={this.props.title} /> : <HeaderIOS title={this.props.title} />}
            </View>
        )
    }
}

let styles = StyleSheet.create({
    headerView: {
        flexDirection: "row",
        height: 40,
    }
})
