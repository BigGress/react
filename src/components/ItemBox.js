import React from "react";
import {
    TouchableHighlight,
    View,
    Text,
    FlatList,
    Button, 
} from "react-native";
import { action, observable } from "mobx";
import { observer } from "mobx-react";

import {
    commonStyle,
    itemBox as style
} from "../style";

@observer
class ItemBoxChild extends React.Component {
    render() {
        return (
            <View style={[commonStyle.flexRow, commonStyle.flexBewteen, style.childViewBox]}>
                <View style={[commonStyle.flexRow, style.childIndexBox]}>
                    <View style={style.childIndexBoxLine}></View>
                    <View style={style.childIndexBoxBackground}></View>
                    <Text style={style.childContentText}>{this.props.data.index + 1}</Text>
                </View>
                <Text>{this.props.data.sku}</Text>
                <Text>发货数量: {this.props.data.quantity || 0}</Text>
            </View>
        )
    }
}

@observer
export default class ItemBox extends React.Component {
    @observable showBox = false;

    test() {

    }

    clickAction() {
        this.props.doAction(this.props)
    }
    
    @action
    toggleBox = () => {
        this.showBox = !this.showBox;
    }

    render() {
        let infos = [
            `${this.props.order}(到货${this.props.quantity})`,
            `采购员: ${this.props.purchaser}`,
            `备注: ${this.props.remark}`
        ];

        return (
            <TouchableHighlight style={[style.viewBox]}
                                onPress={this.toggleBox}
                                underlayColor={"transparent"}>
                <View>
                    <View style={[commonStyle.border, style.viewBoxContent]}>
                        <View style={style.baseInfoBox}>
                            <View style={[commonStyle.flexRow, commonStyle.fullBox, commonStyle.flexBewteen, style.titleBox]}>
                                <Text style={style.titleText}>{this.props.supplierName}</Text>
                                <Text style={style.titleText}>{this.props.number}</Text>
                            </View>
                            <FlatList data={infos}
                                    renderItem={({item}) => <Text style={style.contentText}>{item}</Text>}
                                    keyExtractor={(item, index) => index}/>
                        </View>
                        <View style={[commonStyle.flexRow, commonStyle.flexBewteen, style.statusBox]}>
                            <Text>状态: {this.props.arrivalStatus}-{this.props.checkStatus}</Text>
                            <Button title={"执行"} onPress={this.clickAction.bind(this)}/>
                        </View>
                    </View>
                    <View style={[
                            style.bottomView, 
                            this.showBox ? {height: this.props.orderChildren.length * 26} : {height: 0}
                          ]}>
                        <FlatList data={this.props.orderChildren}
                                  renderItem={({item}) => <ItemBoxChild data={item}/>}
                                  keyExtractor={(item, index) => index}/>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}
