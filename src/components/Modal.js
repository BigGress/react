import React from "react";
import {
    View,
    Text,
    FlatList,
    Button,
    Modal,
} from "react-native";

import { modal as style, commonStyle } from "../style";

export default class EwModal extends React.Component {
    onBack() {
        this.props.onBack()
    }

    onConfirm() {
        this.props.onConfirm();
    }

    render() {
        return ( 
            <Modal {...this.props}>
                <View style={[commonStyle.flexRow, commonStyle.flexBewteen, style.header]}>
                    <Button title="返回" onPress={this.onBack.bind(this)}
                            style={style.headerBtn}
                            color="#fff"/>
                    <Text style={style.headerTitle}>{this.props.title}</Text>
                    <Button title="完成" onPress={this.onConfirm.bind(this)}
                            style={style.headerBtn}
                            color="#fff"/>
                </View>
                <View>
                    {this.props.children}
                </View>
            </Modal>
        )
    }
}