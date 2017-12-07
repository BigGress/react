import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import {
    View,
    Text,
    Image,
    TouchableHighlight,
} from "react-native";

import { assign } from "../util";
import { iconStyle as style } from "../style";

@observer
export default class IconButton extends React.Component {
    render() {
        const iconStyles = assign({
            // backgroundColor: "#1aab45",
            elevation: 3,
        }, this.props.style)

        return (
            <TouchableHighlight onPress={this.props.onPress} style={style.iconTouch}
                                underlayColor={this.props.underlayColor || "transparent"}>
                <View style={iconStyles}>
                    <Image style={style.iconSize} source={this.props.icon}/>
                </View>
            </TouchableHighlight>
        )
    }
}