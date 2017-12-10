import React from "react";
import {
    View,
    Text,
    FlatList,
    Button, 
} from "react-native";
import { action, observable } from "mobx";
import { observer } from "mobx-react";

import {} from "../style";


@observer
export default class ItemDetail extends React.Component {
    onBack() {
        this.props.onBack()
    }
    
    render() {
        return (
            <View>
                <Button onPress={this.onBack.bind(this)} title="back" />
                <Text>test</Text>
            </View>
        )
    }
}