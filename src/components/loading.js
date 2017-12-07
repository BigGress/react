import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

export default class PageLoading extends React.Component {

    render() {
        return <Progress.Circle size={40} indeterminate={true} borderWidth={2} />;
    }
}