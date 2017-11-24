import React,{Component} from "react";
import {
    View,
    Text,
    NavigationIOS,
    NavigatorIOS,
    TouchableHighlight,
    StyleSheet
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
        height: 56,
        width: "100%",
        paddingTop: 22,
        backgroundColor: "#f8f8f8",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    title: {
        fontSize: 18,
    },
})