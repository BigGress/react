import React from "react";
import {
    View,
    Text,
    FlatList,
    Button, 
} from "react-native";
import { action, observable } from "mobx";
import { observer } from "mobx-react";

import { commonStyle, itemDetail as style } from "../style";

import TimePipe from "../pipe/time.pipe";

import appStore from "../store/index";

@observer
class ItemBoxChild extends React.Component {
    render() {
        return (
            <View style={[commonStyle.flexRow, commonStyle.flexBewteen, style.childBox]}>
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
export default class ItemDetail extends React.Component {
    onBack() {
        this.props.onBack()
    }
    
    render() {
        let data = appStore.task.selectTask;

        console.log(`test:`, data)

        let infos = [
            `${data.order || ""} (到货${data.quantity || 0})`,
            `采购员: ${data.purchaser ? data.purchaser.name : ""}`,
            `备注: ${data.remark || "无"}`,
            `状态: ${data.arrivalStatus || ""}-${data.checkStatus || ""}`,
            `预计到货: ${TimePipe(data.predict_time, "yyyy-MM-dd")}`,
            `实际收货: ${TimePipe(data.arrival_time, "yyyy-MM-dd")}`,
            `收货员: ${data.checker ? data.checker.name : ""}`,
        ];

        let datas = data.orderChildren;

        return (
            <View>
                <View style={[commonStyle.border, style.mainBox]}>
                    <View style={[commonStyle.flexBewteen, commonStyle.flexRow, style.titleBox]}>
                        <Text style={style.titleText}>{data.supplier.name}</Text>
                        <Text style={style.titleText}>{data.number}</Text>
                    </View>
                    <FlatList data={infos}
                              renderItem={({item}) => <Text>{item}</Text>}
                              keyExtractor={(item, index) => index}/>
                </View>
                <FlatList data={datas}
                              renderItem={({item}) => <ItemBoxChild data={item} />}
                              keyExtractor={(item, index) => index}/>
            </View>
        )
    }
}