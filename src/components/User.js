import React from "react";
import {
    View,
    Image,
    Text,
} from "react-native";
import { userStyle as style, commonStyle } from "../style";

export default class User extends React.Component {

    getImageSource() {
        if (this.props.image) {
            return {uri: this.props.image}
        } else {
            return require("../assets/images/default-user.png")
        }
    }
    
    render() {
        return (
            <View style={[commonStyle.flexRow, style.user]}>
                <Image style={style.backgroundImage} source={require("../assets/images/background-overlay-final.png")} />
                <View style={[commonStyle.circle, style.userImageBox, commonStyle.flexRow]}>
                    <Image style={style.userImage} source={this.getImageSource()}/>
                </View>
                <View>
                    <Text style={style.userName}>{this.props.name}</Text>
                    <Text style={style.userEmail}>{this.props.email}</Text>
                </View>
            </View>
        );
    }
}