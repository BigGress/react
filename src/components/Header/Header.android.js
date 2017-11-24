import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

export default class EwHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    header: {
        height: 48,
        width: "100%",
        backgroundColor: "#f8f8f8",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    title: {
        fontSize: 22,
        color: "#222"
    },
})