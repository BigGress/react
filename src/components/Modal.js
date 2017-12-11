import React from "react";
import {
    View,
    Text,
    FlatList,
    Button,
    Modal,
    TouchableHighlight,
} from "react-native";

import { modal as style, commonStyle } from "../style";

export default class EwModal extends React.Component {

    onBack() {
        this.props.onBack()
    }

    onConfirm() {
        this.props.onConfirm();
    }

    closeModal() {
        console.log("modal")
    }

    renderHeader() {
        return (
            <View style={[commonStyle.flexRow, commonStyle.flexBewteen, style.header]}>
                {
                    !this.props.hasBack
                    ? (<TouchableHighlight onPress={this.onBack.bind(this)}>
                            <Text style={style.headerBtnText}>返回</Text>
                        </TouchableHighlight>)
                    : null
                }
                    
                <Text style={style.headerTitle}>{this.props.title}</Text>
                {
                    !this.props.hasConfirm
                    ? (<TouchableHighlight onPress={this.onConfirm.bind(this)}>
                            <Text style={style.headerBtnText}>完成</Text>
                    </TouchableHighlight>)
                    : null
                }
            </View> 
        )
    }


    render() {
        return ( 
            <Modal {...this.props} onRequestClose={this.closeModal.bind(this)}>
                {this.renderHeader()}
                <View>
                    {this.props.children}
                </View>
            </Modal>
        )
    }
}