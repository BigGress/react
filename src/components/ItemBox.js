import React from "react";
import {
    TouchableHighlight,
    View,
    Text,
    FlatList,
    Button, 
} from "react-native";
import { observer } from "mobx-react";

import { commonStyle } from "../style";

class ItemBoxChild extends React.Component {

}

export default class ItemBox extends React.Component {
    render() {
        let infos = [
            `${this.props.order}(到货${this.props.quantity})`,
            `采购员: ${this.props.purchaser}`,
            `备注: ${this.props.remark}`
        ]

        return (
            <TouchableHighlight>
                <View>
                    <View>
                        <View style={commonStyle.flexRow}>
                            <Text>{this.props.supplierName}</Text>
                            <Text>{this.props.number}</Text>
                        </View>
                        <FlatList data={infos}
                                renderItem={({item}) => <Text>{item}</Text>}/>
                    </View>
                    <View>
                        <Text>状态: {this.props.orderStatus}-{this.props.arrivalStatus}</Text>
                        <Button title={"执行任务"} />
                    </View>
                    <View>
                        <FlatList data={infos}
                                    renderItem={({item}) => <Text>{item}</Text>}/>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}
