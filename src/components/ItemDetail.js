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
export default class ItemDetail extends React.Component {
    onBack() {
        this.props.onBack()
    }
    
    render() {
        console.log(appStore.task.selectTask)
        let data = appStore.task.selectTask;

        console.log(data);

        let infos = [
            `${data.order || ""} (到货${data.quantity || 0})`,
            `采购员: ${data.purchaser ? data.purchaser.name : ""}`,
            `备注: ${data.remark || "无"}`,
            `状态: ${data.arrivalStatus || ""}-${data.checkStatus || ""}`,
            `预计到货: ${TimePipe(data.predict_time, "yyyy-MM-dd")}`,
            `实际收货: ${TimePipe(data.arrival_time, "yyyy-MM-dd")}`,
            `收货员: ${data.checker ? data.checker.name : ""}`,
        ];

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
            </View>
        )
    }
}