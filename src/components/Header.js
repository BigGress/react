import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import {
    View,
    Text,
    Image,
    TouchableHighlight
} from "react-native";
import { headerStyle as style, commonStyle } from "../style";

import IconButton from "./IconButton";

export default class Header extends React.Component {
    test() {
        console.log(`menu`)
    }

    render() {
        return (
            <View style={[style.box, commonStyle.flexRow]}>
                <IconButton icon={require("../assets/images/menu.png")} onPress={this.props.toggleMenu}/>
                <View style={style.title}>
                    <Text style={style.titleText}>{this.props.title}</Text>
                </View>
                <IconButton icon={require("../assets/images/search.png")} onPress={this.test}/> 
            </View>
        )
    }
}